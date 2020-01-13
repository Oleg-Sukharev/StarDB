import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
    state = {
        selectedPerson: 1,
    };

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })    
    };

    render() {
        const itemList = (
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) => `${name} (${gender},${birthYear})`} />
        );
        const personDetails = (
          <itemDetails personId={this.state.selectedPerson} />
        );
        return(
          <ErrorBoundry>
            <Row left={itemList} right={personDetails}/>
          </ErrorBoundry>
        )
    }
}
