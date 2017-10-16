// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoTable from './InfoTable';

import styles from './InfoModal.scss';

type Props = {
  doodle?: Object,
  history: Object,
  isModal: boolean,
  location: Object,
};

class InfoModal extends Component<Props> {
  backdrop = null;

  close = () => {
    if (this.props.isModal) {
      this.props.history.goBack();
      return;
    }

    this.props.history.push({
      ...this.props.location,
      pathname: this.props.location.pathname.replace(/info\/.*$/, ''),
    });
  };

  render() {
    const { doodle } = this.props;

    if (doodle === undefined) {
      return null;
    }

    return (
      <div className={styles.root}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <a href={`https://www.google.com/doodles/${doodle.name}`} target="_blank">
                  {doodle.title}

                  <small className={styles.externalLink} />
                </a>
              </h5>

              <button className="close" onClick={this.close}>
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <InfoTable doodle={doodle} keys={['countries', 'tags']} />
            </div>
          </div>
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

export default connect(mapStateToProps)(InfoModal);
