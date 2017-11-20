import React from 'react';
import { withRouter } from 'react-router';
import {
  Header,
  Segment,
  Button,
} from 'semantic-ui-react';
import { getResource } from 'copies/appJourney';


const LandingPage = () => (
  <div className="landing-page">
    <Header as="h1" data-bdd-selector="landingHeader">
      {getResource('landingPage.header')}
    </Header>
    <Segment>
      <Header as="h2" data-bdd-selector="subHeader">{getResource('landingPage.subHeader')}</Header>
      <Button primary data-bdd-selector="primaryButton">{getResource('landingPage.button.primary')}</Button>
      <Button secondary data-bdd-selector="secondaryButton">{getResource('landingPage.button.secondary')}</Button>
    </Segment>
    <Header as="h2" data-bdd-selector="routeHeader">{getResource('landingPage.routeHeader')}</Header>
  </div>
);

export default withRouter((LandingPage));
