// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import DoodlesContainer from './DoodlesContainer';

import { loadDoodles } from 'reducers/doodles';

import styles from './Home.scss';

type Props = {
  loadDoodles: Function,
};

type State = {
  sliceSize: number,
};

class Home extends Component<Props, State> {
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

  shouldLoadNext = true;

  render() {
    return (
      <div className="container-fluid" key="Home">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <DoodlesContainer sliceSize={this.state.sliceSize} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadDoodles,
};

export default connect(null, mapDispatchToProps)(Home);
