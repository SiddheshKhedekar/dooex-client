import React, { Component } from 'react';

import styles from './Doodle.scss';

class Doodle extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h4 className={styles.header}>Doodle Title</h4>

        <img className={styles.img} src="http://via.placeholder.com/300x200" alt="Doodle Title" />

        <div className={styles.body}>
          <div className="btn-group btn-group-sm">
            <button className={styles.actionBtn}>
              <span className="fa fa-fw fa-info" />
            </button>

            <button className={styles.actionBtn}>
              <span className="fa fa-fw fa-star-o" />
            </button>

            <button className={styles.actionBtn}>
              <span className="fa fa-fw fa-bookmark" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Doodle;
