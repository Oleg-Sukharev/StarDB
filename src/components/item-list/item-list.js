import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null,
        error: false,
        loading: true
    }
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList,
                    loading: false,
                })
            })
            .catch(this.onError) //catch error not to get down app
    }
    onError = (err) => {
        this.setState({
            loading :false,
            error: true,
        });
    }
    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {
        const { peopleList, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const hasData = !(loading || error)
        const content = hasData ? this.renderItems(peopleList) : null;
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
