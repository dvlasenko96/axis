import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './containers/home';
import Header from './components/header';

import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

interface Props { }
interface State { }

class App extends React.Component<Props, State> {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Router>
            <Route exact={true} path="/" component={Home} />
          </Router >
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
