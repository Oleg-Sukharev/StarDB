import React from 'react';
import ErrorBoundry from '../error-boundry';
import { PersonList,PersonDetails } from "../sw-components"
import { withRouter } from 'react-router-dom'
import './people-page.css';
import Row from '../row'

const PeoplePage = ({history,match}) =>  {
  const { id } = match.params;
  return (
    <ErrorBoundry>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id}/>}
      />
    
    </ErrorBoundry>
  )
}

export default withRouter(PeoplePage);
