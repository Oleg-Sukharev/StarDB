import React from "react";
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from "../hoc-helpers"
const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="Gender" label="gender" />
            <Record field="Eye Color" label="eyeColor" />
        </ItemDetails>
    );
}
const mapMethodsToPros = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    }
}

export default withSwapiService(PersonDetails, mapMethodsToPros)