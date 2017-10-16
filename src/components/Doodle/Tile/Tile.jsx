import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loader from './Loader';

import styles from './Tile.css';

class Tile extends Component {
  static propTypes = {
    link: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  state = {
    loaded: false,
  };

  refImg = null;

  handleLoad = () => {
    this.refImg.className = styles.img;

    this.setState({ loaded: true });
  };

  handleError = () => {
    this.refImg.src = `${this.props.src}?${+new Date()}`;
  };

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