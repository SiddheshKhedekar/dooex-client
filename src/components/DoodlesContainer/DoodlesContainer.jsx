// @flow

import type { Location } from 'react-router-dom';

import type { Doodle as DoodleType } from 'modules/types';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Doodle from 'components/Doodle';

import { updateDoodle } from 'reducers/doodles';
import searchFilter from 'filters/searchFilter';

type Props = {
  doodles: Array<DoodleType>,
  location: Location,
  pathname: string,
  sliceSize: number,
  updateDoodle: Function,
};

function DoodlesContainer(props: Props) {
  const basepath = props.location.pathname.replace(/\/$/, '');

  return (
    <div className="col-12">
      {props.doodles.map(doodle => (
        <Doodle
          key={doodle.id}
          doodle={doodle}
          basepath={basepath}
          updateDoodle={props.updateDoodle}
        />
      ))}
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

const mapDispatchToProps = {
  updateDoodle,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoodlesContainer));
