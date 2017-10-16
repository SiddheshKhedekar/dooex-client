// @flow

import type { DoodleType } from 'types';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tile from './Tile';

import styles from './Doodle.scss';

type Props = DoodleType & {
  location: Object,
};

class Doodle extends Component<Props> {
  modalPathname(modalType: string) {
    return {
      ...this.props.location,

      pathname: `/${modalType}/${this.props._id}`,
      state: { modal: true },
    };
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
          link={this.modalPathname('fullscreen')}
          src={this.props.url}
          title={this.props.title}
        />
      </div>
    );
  }
}

export default Doodle;
