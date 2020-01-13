import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './item-list.css';

export default class ItemList extends Component {
    state = {
        itemList: null,
        error: false,
        loading: true
    }
    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
                console.log(itemList);
                this.setState({
                    itemList,
                    loading: false,
                })
            })
            .catch(this.onError) //catch error not to get down app
    }
    onError = () => {
        this.setState({
            loading :false,
            error: true,
        });
    }
    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item
            const label = this.props.renderItem(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {
        const { itemList, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const hasData = !(loading || error)
        const content = hasData ? this.renderItems(itemList) : null;
        return (
            <React.Fragment>
                <ul className="item-list list-group">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
            </React.Fragment>
        );
    }
}
