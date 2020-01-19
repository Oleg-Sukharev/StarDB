import React from "react";
import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from "../../components/swapi-service-context";

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPersonImage, getPerson }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImage}>
                            <Record field="Gender" label="gender" />
                            <Record field="Eye Color" label="eyeColor" />
                        </ItemDetails>
                    )

                }
            }
        </SwapiServiceConsumer>
    );
}
const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetsImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetsImage}>
                            <Record field="Population" label="population" />
                            <Record field="Diameter" label="diameter" />
                            <Record field="RotationPeriod" label="rotationPeriod" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}