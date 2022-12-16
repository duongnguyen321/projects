import React from "react";

import "./learn.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Thông tin", handler: props.actionProvider.infoLink, id: 1 },
    { text: "Liên hệ", handler: props.actionProvider.contactLink, id: 2 },
    { text: "projects", handler: props.actionProvider.projectsLink, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
