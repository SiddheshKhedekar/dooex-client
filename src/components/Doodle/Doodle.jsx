import React, { Component } from 'react';
import styles from './Doodle.scss';

class Doodle extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h4 className={styles.header}>Doodle Title</h4>

        <img className={styles.img} src="http://via.placeholder.com/300x200" alt="Doodle Title" />

        <div className="card-body">
          <div className="btn-group btn-group-sm">
            <button className="btn btn-secondary">Info</button>
            <button className="btn btn-secondary">Like</button>
            <button className="btn btn-secondary">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Doodle;
