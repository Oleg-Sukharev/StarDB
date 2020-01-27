import React from "react";
import ItemList from "../item-list";
import { withData, withChildFunction, withSwapiService } from "../hoc-helpers/";

const renderName = ({ name }) => <span>{name}</span>;

const mapPeopleMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}


const PersonList = withSwapiService(mapPeopleMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
}