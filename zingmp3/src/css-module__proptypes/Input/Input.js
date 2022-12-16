import React from "react";
import inputStyle from "./Button.module.scss";

import clsx from "clsx";

export default function Input() {
  const { "btn-success": btnSuccess, btn } = inputStyle;
  return <div className={clsx(btnSuccess, btn)}>Input</div>;
}
