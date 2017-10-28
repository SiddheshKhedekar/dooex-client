// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import OnlineLink from 'components/OnlineLink';
import SaveButton from 'components/SaveButton';
import Tile from 'components/Tile';

import styles from './Doodle.css';

type Props = {
  basepath: string,
  doodle: DoodleType,
};

class Doodle extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    if (nextProps.doodle === this.props.doodle) {
      return false;
    }

    return true;
  }

  render() {
    const { doodle } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.actions}>
            <Link className="btn" to={`${this.props.basepath}/info/${doodle.id}`}>
              <span className="fa fa-fw fa-info" />
            </Link>

            <SaveButton doodle={doodle} />
          </div>

          <h5 className={styles.title}>{doodle.title}</h5>
        </div>

        <OnlineLink
          force={this.props.doodle.isSaved}
          to={`${this.props.basepath}/fullscreen/${doodle.id}`}
          className={styles.tileLink}
        >
          <Tile src={doodle.url} title={doodle.title} />
        </OnlineLink>
      </div>
    );
  }
}

export default Doodle;
