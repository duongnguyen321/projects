import React, { useEffect, useState } from "react";

export default function Form({
  getData,
  setUserChat,
  setLoading,
  userChat,
  loading,
  count,
}) {
  const [value, setValue] = useState("");
  const isFormDisabled = loading || count >= 3;

  useEffect(() => {
    if (!loading) {
      setValue("");
    }
  }, [loading]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isFormDisabled && value) {
      getData(value);
      setUserChat(userChat ? userChat.concat(value) : [value]);
      setLoading(true);
    }
  };

  const inputPlaceholder =
    count >= 3 ? "Vui lòng reload để tiếp tục!" : "Ask me!";

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        className="input_form"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder={inputPlaceholder}
        value={value}
        autoFocus
        disabled={isFormDisabled}
      />
      <button type={isFormDisabled ? "button" : "submit"}>🔎</button>
    </form>
  );
}
