import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry'
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';
//two export //dont show error
import SwapiService from '../../services/swapi-service';
import Row from '../row';
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

    const personList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPlanets}
        renderItem={(item) => item.name}
      />
    );
    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={12}
        getData={getPerson}
        getImageUrl={getPersonImage}>
          <Record field="Gender" label="gender" />
          <Record field="Eye Color" label="eyeColor" />
      </ItemDetails>
    );

    const starShipDetails = (
      <ItemDetails 
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>
          <Record field="Model" label="model" />
          <Record field="Length" label="length" />
          <Record field="Cost" label="costInCredits" />
      </ItemDetails>
    ); 
    
    return (
      <ErrorBoundry>
        <div className='container'>
          {/* <Row left={personDetails} right={starShipDetails} /> */}
          {personList}
          {/* <Header/>
          {planet}
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
