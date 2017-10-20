// @flow

import type { Location } from 'react-router-dom';

import type { Doodle as DoodleType } from 'modules/types';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Doodle from 'components/Doodle';

import searchFilter from 'filters/searchFilter';

type Props = {
  doodles: Array<DoodleType>,
  location: Location,
  pathname: string,
  sliceSize: number,
};

function DoodlesContainer(props: Props) {
  const basepath = props.location.pathname.replace(/\/$/, '');

  return (
    <div className="col-12">
      {props.doodles.map(doodle => <Doodle {...doodle} key={doodle.id} basepath={basepath} />)}
    </div>
  );
}

function mapStateToProps(state, ownProps: Props) {
  let { doodles } = state;
  const searchKeyword = state.search;

  const { pathname } = ownProps.location;

  switch (true) {
    case pathname.startsWith('/search'):
      doodles = searchFilter(doodles, searchKeyword);
      break;

    default:
  }

  return {
    doodles: doodles.slice(0, ownProps.sliceSize),
  };
}

export default withRouter(connect(mapStateToProps)(DoodlesContainer));
