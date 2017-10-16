// @flow

import React from 'react';
import { connect } from 'react-redux';

import FullScreen from 'components/FullScreen';

import { loadDoodles } from 'modules/doodles/reducer';

type Props = { loadDoodles: Function };

class FullScreenContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.loadDoodles();
  }

  render() {
    return <FullScreen {...this.props} />;
  }
}

const mapDispatchToProps = {
  loadDoodles,
};

export default connect(null, mapDispatchToProps)(FullScreenContainer);
