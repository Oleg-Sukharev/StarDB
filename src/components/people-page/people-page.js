import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import {
  PersonList,
  PersonDetails,
} from "../sw-components"

import './people-page.css';

export default class PeoplePage extends Component {
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
