// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader';

import styles from './Tile.css';

type Props = {
  link: Object,
  title: string,
  src: string,
};

type State = {
  loaded: boolean,
};

class Tile extends Component<Props, State> {
  state = {
    loaded: false,
  };

  handleError = () => {
    // $FlowFixMe
    this.refImg.src = `${this.props.src}?${+new Date()}`;
  };

  handleLoad = () => {
    // $FlowFixMe
    this.refImg.className = styles.img;

    this.setState({ loaded: true });
  };

  refImg = null;

  renderLoader() {
    if (this.state.loaded) {
      return null;
    }

    return <Loader />;
  }

  render() {
    return (
      <Link to={this.props.link} href={this.props.link} className={styles.root}>
        {this.renderLoader()}

        <img
          className={styles.imgHidden}
          src={this.props.src}
          alt={this.props.title}
          ref={img => (this.refImg = img)}
          onLoad={this.handleLoad}
          onError={this.handleError}
        />
      </Link>
    );
  }
}

export default Tile;
