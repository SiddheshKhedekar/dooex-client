// @flow

import type { Location } from 'react-router';

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';

import Alert from 'components/Alert';
import Doodle from 'components/Doodle';
import NoDoodles from 'components/NoDoodles';

import savedFilter from 'filters/saved-filter';
import searchFilter from 'filters/search-filter';
import { cacheDoodle, uncacheDoodle } from 'modules/cache-doodles';
import { loadDoodles, updateDoodle } from 'reducers/doodles';
import { updateBatchSize } from 'reducers/infinite-scroll';

import styles from './Main.scss';

type Props = {
  doodles: Array<DoodleType>,
  loadDoodles: Function,
  location: Location,
  pathname: string,
  updateBatchSize: Function,
  updateDoodle: Function,
};

class Main extends Component<Props> {
  componentDidMount() {
    if (this.props.doodles.length === 0) {
      this.props.loadDoodles();
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // $FlowFixMe
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

    this.props.updateBatchSize();
  };

  shouldLoadNext = true;

  toggleSave = async (doodle: DoodleType) => {
    try {
      if (doodle.isSaved) {
        await uncacheDoodle(doodle);
      } else {
        await cacheDoodle(doodle);
      }
    } catch (err) {
      Alert(`${doodle.isSaved ? 'Unsave' : 'Save'} "${doodle.title}" failed`, 'danger');

      return;
    }

    Alert(`${doodle.isSaved ? 'Unsaved' : 'Saved'} "${doodle.title}"`, 'success');

    this.props.updateDoodle({
      ...doodle,

      isSaved: !doodle.isSaved,
    });
  };

  renderDoodles() {
    if (this.props.doodles.length === 0) {
      return null;
    }

    const basepath = this.props.location.pathname.replace(/\/$/, '');

    return (
      <div className="col-12">
        {this.props.doodles.map(doodle => (
          <Doodle
            key={doodle.id}
            doodle={doodle}
            basepath={basepath}
            toggleSave={this.toggleSave}
          />
        ))}

        <hr style={{ width: '85%' }} />
      </div>
    );
  }

  render() {
    return (
      <div key="Main" className="container-fluid">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <NoDoodles />
            {this.renderDoodles()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps: Props) {
  const { infiniteScrollBatchSize: batchSize, search: searchKeyword } = state;
  let { doodles } = state;

  const { pathname } = ownProps.location;

  switch (true) {
    case pathname.startsWith('/search'):
      doodles = searchFilter(doodles, searchKeyword);
      break;

    case pathname.startsWith('/saved'):
      doodles = savedFilter(doodles);
      break;

    default:
  }

  doodles = doodles.slice(0, batchSize);

  return {
    doodles,
  };
}

const mapDispatchToProps = {
  loadDoodles,
  updateDoodle,
  updateBatchSize,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
