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

  state = {
    sliceSize: 10,
  };

  shouldLoadNext = true;

  componentDidMount() {
    this.props.loadDoodles();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollingElement } = document;

    const scrolledRatio =
      scrollingElement.scrollTop / (scrollingElement.scrollHeight - window.innerHeight);

    if (scrolledRatio > 0.9) {
      this.loadNext();
    }
  };

  loadNext = () => {
    if (this.shouldLoadNext === false) {
      return;
    }

    // debounce scrolling
    this.shouldLoadNext = false;
    setTimeout(() => {
      this.shouldLoadNext = true;
    }, 600);

    this.setState({ sliceSize: this.state.sliceSize + 10 });
  };

  render() {
    return (
      <div className="container-fluid" key="Home">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <div className="col-12">
              {this.props.doodles
                .slice(0, this.state.sliceSize)
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