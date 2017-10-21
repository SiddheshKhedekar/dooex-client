// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Alert from 'components/Alert';
import Tile from 'components/Tile';

import { cacheDoodle, uncacheDoodle } from 'modules/cache-doodles';

import styles from './Doodle.scss';

type Props = {
  basepath: string,
  doodle: DoodleType,
  updateDoodle: Function,
};

class Doodle extends Component<Props> {
  toggleSave = async () => {
    const { doodle } = this.props;

    try {
      if (this.props.doodle.isSaved) {
        await uncacheDoodle(doodle);

        new Alert(`Unsaved "${doodle.title}"`);
      } else {
        await cacheDoodle(doodle);

        new Alert(`Saved "${doodle.title}"`, 'primary');
      }
    } catch (err) {
      console.error(err);

      alert(`${doodle.isSaved ? 'UNSAVE' : 'SAVE'} FAILED`);

      return;
    }

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
          <div className={styles.actionBtns}>
            <Link className={styles.actionBtn} to={`${this.props.basepath}/info/${doodle.id}`}>
              <span className="fa fa-fw fa-info" />
            </Link>

            <button className={styles.actionBtn} onClick={this.toggleSave}>
              <span className={`fa fa-fw ${doodle.isSaved ? 'fa-star' : 'fa-star-o'}`} />
            </button>
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
