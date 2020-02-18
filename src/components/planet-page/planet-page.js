import React from 'react';
import ErrorBoundry from '../error-boundry';
import { PlanetList } from "../sw-components";
import { withRouter } from 'react-router-dom'

import './planet-page.css';

const PlanetPage = ({history}) => {
  return(
    <ErrorBoundry>
       <PlanetList 
          onItemSelected={(itemId)=>{
            const newPath = `/planet/${itemId}`
            history.push(newPath);
        }}/>
    </ErrorBoundry>
  );
} 

export default withRouter(PlanetPage);

