import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page'
import './app.css';

export default class  App extends Component {
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
        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>

      </div>
    );
  }
};
