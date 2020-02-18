import React from 'react';
import ErrorBoundry from '../error-boundry';
import { PersonList } from "../sw-components"
import { withRouter } from 'react-router-dom'
import './people-page.css';

const PeoplePage = ({history}) =>  {
  return (
    <ErrorBoundry>
      <PersonList onItemSelected={(itemId) => { 
        const newPath = `people/${itemId}`;
        history.push(newPath)
      }} />
    </ErrorBoundry>
  )
}

export default withRouter(PeoplePage);
