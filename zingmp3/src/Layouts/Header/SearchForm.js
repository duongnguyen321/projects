import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";
import SearchSuggest from "./SearchSuggest";
import useClient from "../../Services/Hooks/useClient";
import { DebounceInput } from "react-debounce-input";

function SearchForm(props) {
  const [isHide, setHide] = useState(true);

  const [keywords, setKeywords] = useState("");

  const [songs, setSongs] = useState([]);

  const [suggestKeywords, setSuggestKeywords] = useState([]);

  const client = useClient();

  const getSongs = async (keywords) => {
    let data = [];

    if (keywords !== "") {
      const res = await client.get(client.songs, { name_like: keywords });
      data = res.data;
    }

    setSongs(data);
  };

  const handleFocusInput = (e) => {
    const status = e.type === "focus" ? false : true;
    const time = status ? 300 : 0;
    setTimeout(() => {
      setHide(status); //Mở kết quả search
    }, time);
  };

  const handleSearch = (e) => {
    getSongs(e.target.value);
    setKeywords(e.target.value); //set state
    getSuggestKeywords(e.target.value);
  };

  const getSuggestKeywords = async (keywords) => {
    const res = await client.get(client.keywords, { q: keywords });
    setSuggestKeywords(res.data);
  };

  const handlePostSuggestKeywords = () => {
    postSuggestKeywords();
  };

  const postSuggestKeywords = async () => {
    const res = await client.post(client.keywords, {
      keyword: keywords,
    });
  };

  return (
    <div className="zing-search">
      <div className="search-icon color-main">
        <ion-icon>
          <IonIcon
            name="search-outline"
            role="img"
            className="md hydrated"
            aria-label="search outline"
          />{" "}
        </ion-icon>
      </div>
      <DebounceInput
        className="color-main"
        element="input"
        type="search"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        onFocus={handleFocusInput}
        onBlur={handleFocusInput}
        onChange={handleSearch}
        debounceTimeout={300}
      />
      {/* ------------------------- */}
      <SearchSuggest
        isHide={isHide}
        songs={songs}
        suggestKeywords={suggestKeywords}
        onPostSuggestKeywords={handlePostSuggestKeywords}
      />
    </div>
  );
}

SearchForm.propTypes = {};

export default SearchForm;
