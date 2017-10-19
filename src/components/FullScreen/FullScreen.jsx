// @flow

import type { Location, RouterHistory } from 'react-router-dom';

import type { Doodle } from 'modules/types';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FullScreen.css';

type Props = {
  doodle: Doodle,
  history: RouterHistory,
  isModal: boolean,
  location: Location,
};

class FullScreen extends Component<Props> {
  static defaultProps = {
    doodle: null,
    isModal: true,
  };

  close = () => {
    if (this.props.isModal) {
      this.props.history.goBack();
      return;
    }

    this.props.history.push({
      ...this.props.location,
      pathname: this.props.location.pathname.replace(/fullscreen\/.*$/, ''),
    });
  };

  renderDoodle() {
    const { doodle } = this.props;

    if (doodle.type === 'interactive') {
      return <iframe className={styles.iframe} src={doodle.standalone_html} title={doodle.title} />;
    }

    const windowAspect = window.screen.width / window.screen.height;

    return (
      <img
        className={windowAspect > doodle.aspect ? styles.landscape : styles.portrait}
        src={doodle.hires_url}
        alt={doodle.title}
      />
    );
  }

  render() {
    if (this.props.doodle === null) {
      return null;
    }

    return (
      <div className={styles.root}>
        {this.renderDoodle()}

        <div className={styles.closeContainer}>
          <button className={styles.close} onClick={this.close}>
            <span>&times;</span>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { doodleId } = ownProps.match.params;

  return {
    doodle: state.doodles.find(doodle => doodle.id === doodleId),
  };
}

export default connect(mapStateToProps)(FullScreen);
