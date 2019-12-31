import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainMenuPage from './pages/Main-Menu/main-menu-page';
import DismissableAlert from './components/DismissibleAlert/dismissable-alert.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route>
            <MainMenuPage />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
