import React from 'react';
import PropTypes from 'prop-types';

class HiReCoded extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

HiReCoded.propTypes = {
  name: PropTypes.string
};// Code Goes Here