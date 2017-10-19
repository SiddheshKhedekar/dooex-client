// @flow

import type { Location } from 'react-router-dom';

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Tile from 'components/Tile';

import styles from './Doodle.scss';

type Props = DoodleType & {
  location: Location,
};

class Doodle extends Component<Props> {
  modalPathname(modalType: string) {
    const pathname = this.props.location.pathname.replace(/\/$/, '');

    return `${pathname}/${modalType}/${this.props.id}`;
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.actionBtns}>
            <Link className={styles.actionBtn} to={this.modalPathname('info')}>
              <span className="fa fa-fw fa-info" />
            </Link>

            <button className={styles.actionBtn}>
              <span className="fa fa-fw fa-star-o" />
            </button>
          </div>

          <h4 className={styles.title}>{this.props.title}</h4>
        </div>

        <Tile
          location={this.modalPathname('fullscreen')}
          src={this.props.url}
          title={this.props.title}
        />
      </div>
    );
  }
}

export default withRouter(Doodle);
