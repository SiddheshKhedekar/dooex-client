// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React from 'react';
import { Link } from 'react-router-dom';

import Tile from 'components/Tile';

import styles from './Doodle.scss';

type Props = {
  ...DoodleType,

  basepath: string,
};

function Doodle(props: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.actionBtns}>
          <Link className={styles.actionBtn} to={`${props.basepath}/info/${props.id}`}>
            <span className="fa fa-fw fa-info" />
          </Link>

          <button className={styles.actionBtn}>
            <span className="fa fa-fw fa-star-o" />
          </button>
        </div>

        <h4 className={styles.title}>{props.title}</h4>
      </div>

      <Link to={`${props.basepath}/fullscreen/${props.id}`} className={styles.tileLink}>
        <Tile src={props.url} title={props.title} />
      </Link>
    </div>
  );
}

export default Doodle;
