import React from 'react';
import PropTypes from 'prop-types';

import styles from './Doodle.scss';

function Doodle({ title, url }) {
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
        </div>

        <h4 className={styles.title}>{title}</h4>
      </div>

      <img className={styles.img} src={url} alt={title} />
    </div>
  );
}

Doodle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Doodle;
