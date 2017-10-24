// @flow

import React from 'react';

import styles from './NoDoodles.css';

function NoDoodles() {
  const faces = ['¯\\_(ツ)_/¯', '(·.·)', '(˚Δ˚)', '(·_·)', '(>_<)', '(;-;)', '(≥o≤)', '\\(o_o)/'];

  return (
    <div className={styles.root}>
      <h1>{faces[Math.floor(Math.random() * faces.length)]}</h1>

      <small>No doodles to see</small>
    </div>
  );
}

export default NoDoodles;
