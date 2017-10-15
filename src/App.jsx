import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import InfoModal from 'components/InfoModal';
import TopNav from 'components/TopNav';

import styles from './App.scss';

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <TopNav />

        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />

          <Route
            path="/info/:doodleId"
            render={routeProps => (
              <div>
                {isModal ? null : <Home isModal={isModal} />}

                <InfoModal {...routeProps} isModal={isModal} />
              </div>
            )}
          />
        </Switch>

        {isModal ? <Route path="/info/:doodleId" component={InfoModal} /> : null}
      </div>
    );
  }
}

export default App;
