import React from "react";

import "./learn.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Ưu Đãi", handler: props.actionProvider.handlePackages, id: 1 },
    { text: "Dịch Vụ", handler: props.actionProvider.handleServices, id: 2 },
    { text: "Covid-19", handler: props.actionProvider.handleCovid, id: 3 },
    { text: "An Toàn", handler: props.actionProvider.handleSafe, id: 4 },
    { text: "Về chúng tôi", handler: props.actionProvider.handleAbout, id: 5 },
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
