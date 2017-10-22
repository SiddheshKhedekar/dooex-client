// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Alert from 'components/Alert';
import SaveButton from 'components/SaveButton';
import Tile from 'components/Tile';

import { cacheDoodle, uncacheDoodle } from 'modules/cache-doodles';

import styles from './Doodle.css';

type Props = {
  basepath: string,
  doodle: DoodleType,
  updateDoodle: Function,
};

class Doodle extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    if (nextProps.doodle === this.props.doodle) {
      return false;
    }

    return true;
  }

  toggleSave = async () => {
    const { doodle } = this.props;

    try {
      if (this.props.doodle.isSaved) {
        await uncacheDoodle(doodle);
      } else {
        await cacheDoodle(doodle);
      }
    } catch (err) {
      Alert(`${doodle.isSaved ? 'Unsave' : 'Save'} "${doodle.title}" failed`, 'danger');

      return;
    }

    Alert(`${doodle.isSaved ? 'Unsaved' : 'Saved'} "${doodle.title}"`, 'success');

    this.props.updateDoodle({
      ...doodle,
      isSaved: !doodle.isSaved,
    });
  };

  render() {
    const { doodle } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.actions}>
            <Link className="btn" to={`${this.props.basepath}/info/${doodle.id}`}>
              <span className="fa fa-fw fa-info" />
            </Link>

            <SaveButton onClick={this.toggleSave} isSaved={doodle.isSaved} />
          </div>

          <h4 className={styles.title}>{doodle.title}</h4>
        </div>

        <Link to={`${this.props.basepath}/fullscreen/${doodle.id}`} className={styles.tileLink}>
          <Tile src={doodle.url} title={doodle.title} />
        </Link>
      </div>
    );
  }
}

export default Doodle;
