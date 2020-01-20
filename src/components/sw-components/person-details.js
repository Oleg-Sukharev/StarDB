import React from "react";
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from "../hoc-helpers"
const PersonDetails = ({ itemId,swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="Gender" label="gender" />
            <Record field="Eye Color" label="eyeColor" />
        </ItemDetails>
    );
}

export default withSwapiService(PersonDetails)