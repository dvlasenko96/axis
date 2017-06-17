import SitesContainer from '../sites';

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {}
interface State {}

class Home extends React.Component<Props, State> {
  render() {
    return (
      <div>
          <SitesContainer/>
      </div>
    );
  }
}

export default Home;
