import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './FullScreen.css';

class FullScreen extends React.Component {
  static propTypes = {
    doodle: PropTypes.object,
    history: PropTypes.object.isRequired,
    isModal: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {
    doodle: null,
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
      return <iframe className={styles.iframe} src={doodle.standaloneHtml} title={doodle.title} />;
    }

    const windowAspect = window.screen.width / window.screen.height;

    return (
      <img
        className={windowAspect > doodle.aspect ? styles.landscape : styles.portrait}
        src={doodle.hiresUrl}
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
    doodle: state.doodles.find(doodle => doodle._id === doodleId),
  };
}

export default connect(mapStateToProps)(FullScreen);
