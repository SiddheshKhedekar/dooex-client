// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import SaveButton from 'components/SaveButton';
import Tile from 'components/Tile';

import styles from './Doodle.css';

type Props = {
  basepath: string,
  doodle: DoodleType,
  toggleSave: Function,
};

class Doodle extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    if (nextProps.doodle === this.props.doodle) {
      return false;
    }

    return true;
  }

  toggleSave = () => {
    this.props.toggleSave(this.props.doodle);
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

          <h5 className={styles.title}>{doodle.title}</h5>
        </div>

        <Link to={`${this.props.basepath}/fullscreen/${doodle.id}`} className={styles.tileLink}>
          <Tile src={doodle.url} title={doodle.title} />
        </Link>
      </div>
    );
  }
}

export default Doodle;
