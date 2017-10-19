// @flow

import type { Location } from 'react-router-dom';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DoodlesContainer from 'components/DoodlesContainer';

import { loadDoodles } from 'reducers/doodles';

import styles from './Main.scss';

type Props = {
  loadDoodles: Function,
  location: Location,
};

type State = {
  sliceSize: number,
};

class Main extends Component<Props, State> {
  state = {
    sliceSize: 10,
  };

  componentDidMount() {
    this.props.loadDoodles();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  shouldLoadNext = true;

  handleScroll = () => {
    // $FlowFixMe
    const { scrollingElement } = document;

    const scrolledRatio =
      scrollingElement.scrollTop / (scrollingElement.scrollHeight - window.innerHeight);

    if (scrolledRatio > 0.9) {
      this.loadNext();
    }
  };

  loadNext = () => {
    if (this.shouldLoadNext === false) {
      return;
    }

    // debounce scrolling
    this.shouldLoadNext = false;
    setTimeout(() => {
      this.shouldLoadNext = true;
    }, 600);

    this.setState({ sliceSize: this.state.sliceSize + 10 });
  };

  render() {
    return (
      <div key="Main" className="container-fluid">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <DoodlesContainer
              sliceSize={this.state.sliceSize}
              pathname={this.props.location.pathname}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadDoodles,
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
