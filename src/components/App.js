import React from 'react';
import MapComponent from 'components/Map/MapComponent';
import Amplify from 'aws-amplify';
import awsconfig from 'aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <MapComponent></MapComponent>
    </div>
  );
}

export default withAuthenticator(App, true);
