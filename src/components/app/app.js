import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import  {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components"
import './app.css';

export default class  App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () =>{
    this.setState({
      showRandomPlanet: !(this.state.showRandomPlanet)
    }) 
  }

  //if we got errors  hook
  componentDidCatch() {
    this.setState({ hasError: true})
  }
  render() {
    if (this.state.hasError) {
        return(
          <ErrorIndicator/>
        )
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <div className='container'>
          {/* <PersonDetails itemId={3} />
          <PlanetDetails itemId={10} />
          <StarshipDetails itemId={11} /> */}
          {/* <Row left={personDetails} right={starShipDetails} /> */}
          <PersonList/>
          <PlanetList/>
          <StarshipList/>
          {/* <Header/>
          <div className="row mb2">
            <div className='col-md-12 mb2'>
              <button
                className="toggle-planet bnt btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle random planet
              </button>
              <ErrorButton/>
            </div>
          </div>
          <div className="row"> 
            <div className="col-md-6">
      
            </div>
            <div className="col-md-6">
              <ItemDetails personId={this.state.selectedPerson} />
            </div>
          </div> */}
          {/* <PeoplePage /> */}
        </div>
      </ErrorBoundry>
    );
  }
};
