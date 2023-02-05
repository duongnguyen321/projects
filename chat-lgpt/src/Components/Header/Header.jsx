import React from "react";

export default function Header({ count }) {
  const handleChangeColor = (e) => {
    const body = document.getElementsByTagName("BODY")[0];
    body.className = e.target.className;
  };
  return (
    <header className="header">
      {count >= 3 && (
        <h1 className="header_title">
          Bạn đã quá số lần đặt câu hỏi. vui lòng reload để tiếp tục!
        </h1>
      )}
      <div className="changeColor">
        <i className="green" onClick={handleChangeColor}>
          💚
        </i>
        <i className="white" onClick={handleChangeColor}>
          🤍
        </i>
        <i className="orange" onClick={handleChangeColor}>
          🧡
        </i>
      </div>
    </header>
  );
}
