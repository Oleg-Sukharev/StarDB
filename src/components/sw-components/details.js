import React from "react";
import ItemDetails, { Record } from '../item-details';
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const {
    getPlanet,
    getPerson,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetsImage
} = swapiService;

const PersonDetails = ({ itemId}) => {
    return(
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="Gender" label="gender" />
            <Record field="Eye Color" label="eyeColor" />
        </ItemDetails>
    );
} 
const PlanetDetails = ({ itemId}) => { 
    return(
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetsImage}>
            <Record field="Population" label="population" />
            <Record field="Diameter" label="diameter" />
            <Record field="RotationPeriod" label="rotationPeriod" />
        </ItemDetails>
    )
};
const StarshipDetails = ({ itemId}) => { 
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field="Model" label="model" />
            <Record field="Length" label="length" />
            <Record field="Cost" label="costInCredits" />
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}