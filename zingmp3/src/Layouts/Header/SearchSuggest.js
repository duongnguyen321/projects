import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

function SearchSuggest({
  isHide,
  songs,
  suggestKeywords,
  onPostSuggestKeywords,
}) {
  const handleClickResult = () => {
    onPostSuggestKeywords();
  };
  return (
    <div
      className={clsx(
        "info-search",
        isHide && "hide",
        songs.length && "show-Results"
      )}
    >
      <div className="info-search-main">
        {songs.length ? (
          <div className="show">
            <div className="keywords">
              <div className="suggest-header">
                <h1 className="color-title">Từ Khóa Liên Quan</h1>
              </div>
              <div className="suggest-body">
                {suggestKeywords.length > 0 &&
                  suggestKeywords.map(({ id, keyword }) => {
                    return (
                      <li className="item" key={id} onClick={handleClickResult}>
                        <span className="color-small">
                          <i className="fa-solid fa-arrow-trend-up" />
                        </span>
                        <span className="title color-main">{keyword}</span>
                      </li>
                    );
                  })}
              </div>
            </div>
            <div className="recently">
              <div className="header">
                <h1 className="color-title">Gợi ý kết quả</h1>
              </div>
              <div className="body">
                {songs.map(({ id, name, image, singer }) => {
                  const singerJsx = singer.map(({ id, name }) => (
                    <Link
                      className="singer color-small"
                      key={id}
                      to={"/ca-sy/" + id}
                    >
                      {name}
                    </Link>
                  ));
                  return (
                    <li
                      key={id}
                      className="song-item recently-song-item "
                      onClick={handleClickResult}
                    >
                      <div className="individual-ctn2-song-item-img">
                        <img
                          src={image}
                          alt={name}
                          className="individual-ctn2-song-img"
                        />
                        <div className="individual-ctn2-song-item-icon">
                          <IonIcon
                            name="play"
                            role="img"
                            className="md hydrated"
                            aria-label="play"
                          />
                        </div>
                        <div className="icon-play-song ">
                          <img
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="individual-ctn2-song-title">
                        <span className="color-title">
                          <Link to={"/bai-hat/abc"}>{name}</Link>
                        </span>
                        <small className="color-small">{singerJsx}</small>
                      </div>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="suggest ">
            <div className="suggest-header">
              <h1 className="color-title">Gợi Ý Cho Bạn</h1>
            </div>
            <div className="suggest-body">
              <li className="item">
                <span className="color-small">
                  <i className="fa-solid fa-arrow-trend-up" />
                </span>
                <span className="title color-main">Tây Sơn Hào Kiệt</span>
              </li>
              <li className="item">
                <span className="color-small">
                  <i className="fa-solid fa-arrow-trend-up" />
                </span>
                <span className="title color-main">Ngôi Sao Cô Đơn</span>
              </li>
              <li className="item">
                <span className="color-small">
                  <i className="fa-solid fa-arrow-trend-up" />
                </span>
                <span className="title color-main">Lặng Yên</span>
              </li>
              <li className="item">
                <span className="color-small">
                  <i className="fa-solid fa-arrow-trend-up" />
                </span>
                <span className="title color-main">Đom Đóm</span>
              </li>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

SearchSuggest.propTypes = {
  isHide: PropTypes.bool.isRequired,
  songs: PropTypes.array,
};

export default SearchSuggest;
