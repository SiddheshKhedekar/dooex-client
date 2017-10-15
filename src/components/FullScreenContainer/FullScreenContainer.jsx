import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FullScreen from 'components/FullScreen';

import { loadDoodles } from 'modules/doodles/reducer';

class FullScreenContainer extends React.Component {
  static propTypes = {
    loadDoodles: PropTypes.func.isRequired,
  };

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
