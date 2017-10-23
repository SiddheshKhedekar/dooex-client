// @flow

import type { Location } from 'react-router';

import type { Doodle as DoodleType } from 'modules/types';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Doodle from 'components/Doodle';

import { updateDoodle } from 'reducers/doodles';
import savedFilter from 'filters/savedFilter';
import searchFilter from 'filters/searchFilter';

type Props = {
  doodles: Array<DoodleType>,
  location: Location,
  pathname: string,
  sliceSize: number,
  updateDoodle: Function,
};

function DoodlesContainer(props: Props) {
  const faces = ['¯\\_(ツ)_/¯', '(·.·)', '(˚Δ˚)', '(·_·)', '(>_<)', '(;-;)', '(≥o≤)', '\\(o_o)/'];

  if (props.doodles.length === 0) {
    return (
      <div
        className="text-center"
        style={{
          position: 'absolute',
          left: '50%',
          top: '45%',

          fontFamily: 'monospace',
          opacity: 0.3,

          transform: 'translate(-50%, -50%)',
          zoom: 2.4,
        }}
      >
        <h1>{faces[Math.floor(Math.random() * faces.length)]}</h1>

        <small>No doodles to see</small>
      </div>
    );
  }

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

      <hr style={{ width: '85%' }} />
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

    case pathname.startsWith('/saved'):
      doodles = savedFilter(doodles);
      break;

    default:
      doodles = doodles.slice(0, ownProps.sliceSize);
  }

  return {
    doodles,
  };
}

const mapDispatchToProps = {
  updateDoodle,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoodlesContainer));
