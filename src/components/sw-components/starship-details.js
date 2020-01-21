import React from "react";
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from "../hoc-helpers"

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="Model" label="model" />
            <Record field="Length" label="length" />
            <Record field="Cost" label="costInCredits" />
        </ItemDetails>
    )
};

const mapMethodsToPros = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage,
    }
}


export default withSwapiService(StarshipDetails, mapMethodsToPros)