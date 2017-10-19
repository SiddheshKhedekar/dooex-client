// @flow

import type { Doodle as DoodleType } from 'modules/types';

import React from 'react';
import { connect } from 'react-redux';

import Doodle from './Doodle';

import searchFilter from 'filters/searchFilter';

type Props = {
  pathname: string,
  sliceSize: number,
  doodles: Array<DoodleType>,
};

function DoodlesContainer(props: Props) {
  return (
    <div className="col-12">
      {props.doodles.map(doodle => <Doodle key={doodle.id} {...doodle} />)}
    </div>
  );
}

function mapStateToProps(state, ownProps: Props) {
  let { doodles } = state;
  const searchKeyword = state.search;

  const { pathname } = ownProps;

  switch (pathname) {
    case '/search':
      doodles = searchFilter(doodles, searchKeyword);
      break;

    default:
  }

  return {
    doodles: doodles.slice(0, ownProps.sliceSize),
  };
}

export default connect(mapStateToProps)(DoodlesContainer);
