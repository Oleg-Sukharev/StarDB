import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';
import './item-details.css';

const Record = ({item,field,label}) => {
  return(
    <li className="list-group-item">
      <span className="term">{field}</span>
      <span>{item[label]}</span>
    </li>
  );
}

export {
  Record
}


export default class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    image: null,
    loading: false
  }
  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true })
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      })
  }

  render() {
    const { item,image,loading} = this.state;
    if (!item) {
      return  <div className='person-details'>Select a person from a list</div>
    }
    const { name } = item;
    if (loading) {
      return (
        <Spinner />
      );
    }
    return (
      <div className="person-details card">
        <img className="person-image" src={image} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children,( child )=>{
                return React.cloneElement(child, { item })
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}