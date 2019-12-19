import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/index.js'

import './random-planet.css';

export default class RandomPlanet extends Component {
    SwapiService = new SwapiService();
    state = {
        planet: {}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState( {planet});
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*20)+2;
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    };

    render() {
        const { planet:{
            name, population, rotationPeriod, diametr,id} } = this.state;
        return (
            <div className="random-planet jumbotron rounded">
                <Spinner />


            </div>

        );
    }
}
