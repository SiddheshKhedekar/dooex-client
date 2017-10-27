// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';

import styles from './NoDoodles.css';

function NoDoodles({ shouldRender }: { shouldRender: boolean }) {
  if (shouldRender === false) {
    return null;
  }

  const faces = ['¯\\_(ツ)_/¯', '(·.·)', '(˚Δ˚)', '(·_·)', '(>_<)', '(;-;)', '(≥o≤)', '\\(o_o)/'];

  return (
    <div className={styles.root}>
      <h1>{faces[Math.floor(Math.random() * faces.length)]}</h1>

      <small>No doodles to see</small>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const { doodles, search } = state;
  const { pathname } = ownProps.location;

  let shouldRender = false;

  if (pathname.startsWith('/search') && search.length > 0) {
    shouldRender = true;
  }

  if (pathname.startsWith('/saved') && doodles.length > 0) {
    shouldRender = true;
  }

  return {
    shouldRender,
  };
}

export default withRouter(connect(mapStateToProps)(NoDoodles));
