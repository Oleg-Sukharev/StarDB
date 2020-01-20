import React from "react";
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from "../hoc-helpers"

const StarshipDetails = ({ itemId,swapiService }) => {
    const { getStarship, getStarshipImage } = swapiService;
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

export default withSwapiService(StarshipDetails)