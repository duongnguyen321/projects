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
  useEffect(() => {
    if (!loading) {
      setValue("");
    }
  }, [loading]);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (count < 3) {
          if (value) {
            getData(value);
            setUserChat(userChat.concat(value));
            setLoading(true);
          }
        }
      }}
    >
      <input
        className="input_form"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"Ask me!"}
        value={count >= 3 ? "Vui lòng reload để tiếp tục!" : value}
        autoFocus
        disabled={loading || (count > 3 && true)}
      />
      <button type={loading || count >= 3 ? "button" : "submit"}>🔎</button>
    </form>
  );
}