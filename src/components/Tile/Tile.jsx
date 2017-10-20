// @flow

import React, { Component } from 'react';

import Loader from 'components/Loader';

import styles from './Tile.css';

type Props = {
  src: string,
  title: string,
};

type State = {
  ready: boolean,
};

class Tile extends Component<Props, State> {
  state = {
    ready: false,
  };

  componentDidMount() {
    const img = new Image();
    img.src = this.props.src;
    img.onload = this.handleLoad;
    img.onerror = this.handleError;
  }

  handleError = (e: Event) => {
    // $FlowFixMe
    const img = e.path[0];

    // bail
    if (navigator.onLine === false) {
      return;
    }

    // $FlowFixMe
    img.src = `${this.props.src}?${+new Date()}`;
  };

  handleLoad = () => {
    this.setState({ ready: true });
  };

  refImg = null;

  render() {
    if (this.state.ready === false) {
      return <Loader />;
    }

    return (
      <img
        className={styles.root}
        src={this.props.src}
        alt={this.props.title}
        ref={img => (this.refImg = img)}
      />
    );
  }
}

export default Tile;
