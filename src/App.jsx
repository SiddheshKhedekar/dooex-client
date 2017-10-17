// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FullScreen from 'components/FullScreen';
import FullScreenContainer from 'components/FullScreenContainer';
import Home from 'components/Home';
import InfoModal from 'components/InfoModal';
import TopNav from 'components/TopNav';

import './App.scss';

type Props = {
  location: Object,
  history: Object,
};

class App extends Component<Props> {
  componentWillUpdate(nextProps: Props) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }

  previousLocation = this.props.location;

  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <TopNav key="TopNav" />

        <Route exact={!isModal} path="/" component={Home} />

        <Route
          path="/info/:doodleId"
          render={routeProps => (
            <div>
              {isModal ? null : <Home isModal={isModal} />}

              <InfoModal {...routeProps} isModal={isModal} />
            </div>
          )}
        />

        <Route
          path="/fullscreen/:doodleId"
          render={(routeProps) => {
            const FullScreenComponent = isModal ? FullScreen : FullScreenContainer;

            return <FullScreenComponent {...routeProps} isModal={isModal} />;
          }}
        />
      </div>
    );
  }
}

export default App;
