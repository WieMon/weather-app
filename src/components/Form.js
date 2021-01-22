import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {

  return (
    <form>
      <input
        type='text'
        value={props.value}
        onChange={props.change}
        placeholder="Enter a city..."
      />
      <button></button>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func,
};
export default Form;
