import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';



import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person : null,
    laoding: false,
    hasError: false

  }
  componentDidMount(){
    this.undatePerson();
  }
  componentDidUpdate(prevProps){
    //if we change state it have to be in if block or it will lead to leads to cyclical dependence

    if (this.props.personId !== prevProps.personId)  {
      this.setState({ loading: true })
      this.undatePerson();
    }
  }
  undatePerson() {
    const {personId} = this.props
    if (!personId){
      return;
    }
    this.swapiService
        .getPerson(personId)
        .then((person) => {
          this.setState({
            loading: false,
            person
          })
        })
  }
  componentDidCatch() {
    this.setState({ hasError: true })
  }
  render() {
    if (!this.state.person){
        return(
          <div className='person-details '>Select a preson from a list </div>
        )
    }
    const {  loading,person:{
            id, name, gender, birthYear, eyeColor}} = this.state;
    if (loading) {
      return (
        <Spinner/>
      );
    }
    return (
        <div className="person-details card">
          <img className="person-image"
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>{eyeColor}</span>
              </li>
            </ul>
            <ErrorButton />
          </div>
        </div>
     
    )
  }
}
