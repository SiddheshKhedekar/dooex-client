// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import DoodlesContainer from 'components/DoodlesContainer';

import { updateBatchSize } from 'reducers/infinite-scroll';
import { loadDoodles } from 'reducers/doodles';

import styles from './Main.scss';

type Props = {
  batchSize: number,
  doodlesCount: number,
  loadDoodles: Function,
  updateBatchSize: Function,
};

class Main extends Component<Props> {
  componentDidMount() {
    if (this.props.doodlesCount === 0) {
      this.props.loadDoodles();
    }

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

    this.props.updateBatchSize();
  };

  shouldLoadNext = true;

  render() {
    return (
      <div key="Main" className="container-fluid">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <DoodlesContainer sliceSize={this.props.batchSize} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    doodlesCount: state.doodles.length,
    batchSize: state.infiniteScrollBatchSize,
  };
}

const mapDispatchToProps = {
  loadDoodles,
  updateBatchSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
