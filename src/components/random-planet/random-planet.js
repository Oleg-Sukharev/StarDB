import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/'
import ErrorIndicator from '../error-indicator'

import './random-planet.css';

export default class RandomPlanet extends Component {
    SwapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor() {
        super();
    }

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 20) + 2;
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)//if we use then we have to have catch 
            .catch(this.onError) //catch error not to get down app
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    render() {
        const { planet, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const hasData = !(loading || error)
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        // null value just ignored
        return (
            <div className="random-planet jumbotron rounded">
                <div className="random-planet jumbotron rounded">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        );
    }
    // default props  /// is not the standard
    // static defaultProps = {
    //     updateInterval: 10000
    // }
}

RandomPlanet.defaultProps = {
    updateInterval: 10000
}

///prevent dif bugs
RandomPlanet.propTypes = {
    updateInterval: (props,propName,componentName) =>{
        const value = props[propName];
        if (typeof value === "number" && !isNaN(value)) {
            return null;
        }
        return new TypeError(`${componentName}: ${propName} must be number`);
    }
}


const PlanetView = ({ planet }) => {
    const { name, population, rotationPeriod, diameter, id } = planet;
    return (
        //create wripper without creating extra  div (react render can return  one element only)
        <React.Fragment>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}