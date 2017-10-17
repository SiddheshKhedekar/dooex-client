// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Doodle from 'components/Doodle';

import { loadDoodles } from 'modules/doodles/reducer';

import styles from './Home.scss';

type Props = {
  loadDoodles: Function,
  doodles: Array<DoodleType>,
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
            <div className="col-12">
              {this.props.doodles
                .slice(0, this.state.sliceSize)
                .map(doodle => <Doodle key={doodle.id} {...doodle} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadDoodles,
};

function mapStateToProps(state) {
  return {
    doodles: state.doodles,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
