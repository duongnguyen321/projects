import React from "react";
import buttonStyle from "./Button.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";
export default function Button({ name, text, status }) {
  const { "btn-success": btnSuccess, btn } = buttonStyle;
  return (
    <button name={name} data-status={status} className={clsx(btnSuccess, btn)}>
      {text}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.bool,
};
