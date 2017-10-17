// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Doodle from './Doodle';

type Props = {
  sliceSize: number,
  doodles: Array<DoodleType>,
};

class DoodlesContainer extends Component<Props> {
  render() {
    return (
      <div className="col-12">
        {this.props.doodles.map(doodle => <Doodle key={doodle.id} {...doodle} />)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    doodles: state.doodles.slice(0, ownProps.sliceSize),
  };
}

export default connect(mapStateToProps)(DoodlesContainer);
