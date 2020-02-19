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
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import { StarshipDetails, PlanetDetails,PersonDetails } from '../sw-components';
import {SecretPage,LoginPage} from '../pages';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false,
    isLoggedIn: false
  }

  onLogin = () => {
    console.log(2);
      console.log(this.state);
      
      this.setState({
        isLoggedIn: true
      })
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
    const { isLoggedIn } = this.state
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const MainHeader = () => {
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

              <Switch>
                {/* optional */}
                <Route path="/" component={MainHeader} exact/>
                <Route path="/people/:id?"  component={PeoplePage} />


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

                <Route path="/login" 
                  render={()=>{
                    return <LoginPage 
                            isLoggedIn={isLoggedIn} 
                            onLogin={this.onLogin}
                            />
                }}/>
                <Route path="/secret" render={()=>{return <SecretPage
                  isLoggedIn={isLoggedIn}
                />}} exact />


                <Route render={() => {
                  return  <h2> Page not found</h2>
                }} />
                <Redirect to="/login"/>
              </Switch>

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
