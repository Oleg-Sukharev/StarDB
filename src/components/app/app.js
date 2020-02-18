import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import StarshipPage from '../starship-page';
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from "../../components/swapi-service-context"
import './app.css';
import { BrowserRouter as Router,Route } from "react-router-dom"
import { StarshipDetails, PlanetDetails,PersonDetails } from '../sw-components';


export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false,
    color: "white"
  }

  toggleRandomPlanet = () => {
    this.setState({
      showRandomPlanet: !(this.state.showRandomPlanet)
    })
  }

  //if we got errors  hook
  componentDidCatch() {
    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorIndicator />
      )
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const MianHeader = () => {
      return (
        <h2>Welcome to StarDB</h2>
      )
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className='container'>
                <Header />
                {planet}
                <Route path="/" component={MianHeader} exact/>
                <Route path="/people" component={PeoplePage} exact/>
                <Route path="/people/:id" 
                  render={({match})=>{
                      const { id } = match.params;

                    return <PersonDetails itemId={id}/>
                  }}/>

                <Route path="/planet" component={PlanetPage} exact/>
                <Route path="/planet/:id" 
                  render={({match}) =>{
                    const { id } = match.params;
                    return <PlanetDetails itemId={id}/>
                  }}/>

                <Route path="/starship" component={StarshipPage} exact />
                <Route path="/starship/:id" 
                  render={({match}) =>{
                    const { id } = match.params;
                    return <StarshipDetails itemId={id}/>
                }}/>
            </div>
          </Router>  
        </SwapiServiceProvider>
      </ErrorBoundry>

         /* 
              <button
                className="toggle-planet bnt btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle random planet
              </button>
              <ErrorButton/>
           */

    );
  }
};
