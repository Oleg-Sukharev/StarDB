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
const mapSrarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}


const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPeopleMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapSrarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}