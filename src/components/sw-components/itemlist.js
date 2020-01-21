import React from "react";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withData,withChildFunction} from "../hoc-helpers/";


const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;
const
 renderName = ({name}) => <span>{name}</span> 

const PersonList = withData(withChildFunction(ItemList, renderName));
const PlanetList = withData(withChildFunction(ItemList, renderName));
const StarshipList = withData(withChildFunction(ItemList, renderName));

export {
    PersonList,
    PlanetList ,
    StarshipList 
}