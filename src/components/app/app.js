import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button'
import './app.css';

export default class  App extends Component {
  state = {
    selectedPerson: null,
    showRandomPlanet: true,
    hasError: false
  }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })    
  };
  toggleRandomPlanet = () =>{
    this.setState({
      showRandomPlanet: !(this.state.showRandomPlanet)
    }) 
    this.foor.bar = 0;
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
      <div className='container'>
        <Header/>
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
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList  onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
};
