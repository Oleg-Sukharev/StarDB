import React from "react"
import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiService = (mapMethodsToProps) => (Wrapper) => {
    return (props) => {
        return (
            <SwapiServiceConsumer >
                {
                    (swapiService) => {
                        const serverProps = mapMethodsToProps(swapiService); 
                        return (
                            <Wrapper {...props} {...serverProps} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;