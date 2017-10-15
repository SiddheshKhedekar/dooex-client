import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Doodle.scss';

class Doodle extends Component {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  modalPathname(modalType) {
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

        <img className={styles.img} src={this.props.url} alt={this.props.title} />
      </div>
    );
  }
}

export default Doodle;
