import React from "react";
import PropTypes from "prop-types";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <div data-test="congrats-message">You guessed the word!</div>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
