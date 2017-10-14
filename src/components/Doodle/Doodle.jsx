import React, { Component } from 'react';

import styles from './Doodle.scss';

class Doodle extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.actionBtns}>
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

          <h4 className={styles.title}>Doodle Title</h4>
        </div>

        <img className={styles.img} src="http://via.placeholder.com/300x200" alt="Doodle Title" />
      </div>
    );
  }
}

export default Doodle;
