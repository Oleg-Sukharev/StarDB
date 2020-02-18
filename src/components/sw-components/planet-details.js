import React from "react";
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from "../hoc-helpers"
const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="Gender" label="gender" />
            <Record field="Eye Color" label="eyeColor" />
        </ItemDetails>
    );
}

const mapMethodsToPros = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetsImage,

    }
}


export default withSwapiService(mapMethodsToPros)(PlanetDetails)