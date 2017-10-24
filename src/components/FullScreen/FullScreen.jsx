// @flow

import type { Location, RouterHistory } from 'react-router';

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
    switch (this.props.doodle.type) {
      case 'interactive':
        return this.renderIframe();

      default:
        return this.renderImage();
    }
  }

  renderIframe() {
    const { doodle } = this.props;

    // Replace origin to convert remote URL into self-hosted URL
    // so that service-worker can `fetch` it

    const url = new URL(doodle.standalone_html);
    const src = url.href.replace(url.origin, '');

    return <iframe className={styles.iframe} src={src} title={doodle.title} />;
  }

  renderImage() {
    const { doodle } = this.props;

    const windowAspect = window.screen.width / window.screen.height;

    return (
      <img
        className={windowAspect > doodle.aspect ? styles.landscape : styles.portrait}
        src={doodle.isSaved ? `/saved?${doodle.hires_url}` : doodle.hires_url}
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
