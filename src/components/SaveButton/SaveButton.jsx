// @flow

import type { Doodle } from 'modules/types';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Alert from 'components/Alert';

import { cacheDoodle, uncacheDoodle } from 'modules/cache-doodles';
import { updateDoodle } from 'reducers/doodles';

import styles from './SaveButton.css';

type Props = {
  doodle: Doodle,
  updateDoodle: Function,
};

class SaveButton extends Component<Props> {
  refSpan: HTMLSpanElement;

  toggleSave = async () => {
    this.refSpan.className = styles.isSaving;

    const { doodle } = this.props;

    try {
      if (doodle.doodle) {
        await uncacheDoodle(doodle);
      } else {
        await cacheDoodle(doodle);
      }

      Alert(`${doodle.isSaved ? 'Unsaved' : 'Saved'} "${doodle.title}"`, 'success');

      this.props.updateDoodle({
        ...doodle,

        isSaved: !doodle.isSaved,
      });
    } catch (err) {
      Alert(`${doodle.isSaved ? 'Unsave' : 'Save'} "${doodle.title}" failed`, 'danger');

      this.refSpan.className = this.props.doodle.isSaved ? styles.saved : styles.notSaved;
    }
  };

  render() {
    return (
      <button className={styles.root} onClick={this.toggleSave}>
        <span
          className={this.props.doodle.isSaved ? styles.saved : styles.notSaved}
          ref={span => (this.refSpan = span)}
        />
      </button>
    );
  }
}

const mapDispatchToProps = {
  updateDoodle,
};

export default connect(null, mapDispatchToProps)(SaveButton);
