import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components"

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
        return(
          <ErrorBoundry>
            <Row 
              left={<PersonList/>}
              right={<PersonDetails itemId={9}/>}/>
          </ErrorBoundry>
        )
    }
}
