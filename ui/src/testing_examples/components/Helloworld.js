import React from 'react';

const HelloWorld = props => (
  <div>
    Hello {props.name} !
  </div>
);

HelloWorld.propTypes = {
  name: React.PropTypes.array.isRequired,
};

HelloWorld.defaultProps = {
  name: ['Sekai'],
};

export default HelloWorld;
