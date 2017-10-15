import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Doodle from 'components/Doodle';

import { loadDoodles } from 'modules/doodles/reducer';

import styles from './Home.scss';

class Home extends Component {
  static propTypes = {
    loadDoodles: PropTypes.func.isRequired,

    doodles: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })).isRequired,
  };

  componentDidMount() {
    this.props.loadDoodles();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <div className="col-12">
              {this.props.doodles
                .slice(0, 10)
                .map(doodle => <Doodle key={doodle._id} {...doodle} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadDoodles,
};

function mapStateToProps(state) {
  return {
    doodles: state.doodles,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
