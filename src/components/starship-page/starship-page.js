import React from 'react';
import ErrorBoundry from '../error-boundry';
import { StarshipList } from "../sw-components"
import './starship-page.css';

import { withRouter } from 'react-router-dom'

const StarshipPage = ({history}) =>{
  return(
    <ErrorBoundry>
      <StarshipList  
        onItemSelected={(itemId)=>{
          const newPath =`/starship/${itemId}`;
          history.push(newPath)
        }}/>
    </ErrorBoundry>
  )
}

export default withRouter(StarshipPage);