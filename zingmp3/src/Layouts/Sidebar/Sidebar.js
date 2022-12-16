import React from "react";
import PropTypes from "prop-types";
import IonIcon from "@reacticons/ionicons";
function Sidebar(props) {
  return (
    <div className="zing-sidebar zing-sidebar-mb c-0">
      <div className="zing-logo c-0">
        <div className="zing-logo-pc ">
          <img
            src="https://sona7ns.github.io/zingmp3.vn/assets/img/sidebar-icon/logo/logo-dark.svg"
            alt=""
          />
        </div>
        <div className="zing-logo-mb l-0">
          <img
            src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.35/static/media/icon_zing_mp3_60.f6b51045.svg"
            alt=""
          />
        </div>
      </div>
      <div className="zing-navbar-menu c-0">
        <div className="zing-navbar-item color-main action-song" data-index={0}>
          <a title="Cá Nhân">
            <ion-icon>
              <IonIcon
                name="play-outline"
                role="img"
                className="md hydrated"
                aria-label="play outline"
              />
            </ion-icon>
            <h1 className="title ">Cá Nhân </h1>
          </a>
        </div>
        <div className="zing-navbar-item color-main" data-index={1}>
          <a title="Khám Phá">
            <ion-icon>
              <IonIcon
                name="disc-outline"
                role="img"
                className="md hydrated"
                aria-label="disc outline"
              />
            </ion-icon>
            <h1 className="title "> Khám Phá</h1>
          </a>
        </div>
        <div className="zing-navbar-item color-main zingchart" data-index={2}>
          <a title="#zingchart">
            <ion-icon>
              <IonIcon
                name="pie-chart-outline"
                role="img"
                className="md hydrated"
                aria-label="stats chart outline"
              />
            </ion-icon>
            <h1 className="title "> #zingchart</h1>
          </a>
          <div className="zingchart-play">
            <i className="fa-regular fa-circle-play" />
          </div>
        </div>
        <div className="zing-navbar-item color-main radio" data-index={3}>
          <a title="Radio">
            <ion-icon>
              <IonIcon
                name="radio-outline"
                role="img"
                className="md hydrated"
                aria-label="radio outline"
              />
            </ion-icon>
            <h1 className="title ">Radio</h1>
            <span className="m-0">LIVE</span>
          </a>
          <div className="radio-play">
            <i className="fa-regular fa-circle-play" />
          </div>
        </div>
        <div className="zing-navbar-item color-main" data-index={4}>
          <a title="Theo Dõi">
            <i className="far fa-list-alt" />
            <h1 className="title "> Theo Dõi</h1>
          </a>
        </div>
        <div className="sidebar-divide" />
      </div>
      {/* ======================= */}
      <div className="zing-navar ">
        <div className="zing-navbar-menu ">
          <div className="zing-navbar-item color-main">
            <a title="Nhạc Mới">
              <ion-icon>
                <IonIcon
                  name="musical-notes-outline"
                  role="img"
                  className="md hydrated"
                  aria-label="musical notes outline"
                />
              </ion-icon>
              <h1 className="title "> Nhạc Mới</h1>
            </a>
          </div>
          <div className="zing-navbar-item color-main">
            <a title="Thể Loại">
              <i className="fab fa-buromobelexperte" />
              <h1 className="title "> Thể Loại</h1>
            </a>
          </div>
          <div className="zing-navbar-item color-main">
            <a title="Top 100">
              <ion-icon>
                <IonIcon
                  name="star-outline"
                  role="img"
                  className="md hydrated"
                  aria-label="star outline"
                />
              </ion-icon>
              <h1 className="title "> Top 100</h1>
            </a>
          </div>
          <div className="zing-navbar-item color-main">
            <a title="MV">
              <i className="fas fa-photo-video" />
              <h1 className="title "> MV</h1>
            </a>
          </div>
          <div className="zing-vip m-0">
            <span className="zing-vip-title color-main">
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </span>
            <button className="btn btn-lever">NÂNG CẤP VIP</button>
          </div>
          <ul className="zing-library-list">
            <li className="zing-library-item color-main m-0">
              <h1 className="zing-library-title color-main ">Thư viện</h1>
            </li>
            <li className="zing-library-item color-main">
              <img
                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg"
                alt=""
              />
              <span className="title">Bài Hát</span>
            </li>
            <li className="zing-library-item color-main">
              <img
                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg"
                alt=""
              />
              <span className="title">Playlist</span>
            </li>
            <li className="zing-library-item color-main">
              <img
                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg"
                alt=""
              />
              <span className="title">Gần Đây</span>
            </li>
          </ul>
        </div>
      </div>
      {/* =============================== */}
      <div className="zing-create-list m-0 color-main">
        <ion-icon>
          <IonIcon
            className="m-0 md hydrated"
            name="add-outline"
            role="img"
            aria-label="add outline"
          />
        </ion-icon>
        <span className="m-0">Tạo playlist mới</span>
      </div>
      <div className="expanded l-0">
        <div className="expanded-left  l-0 color-main">
          <i className="fa-solid fa-chevron-left" />
        </div>
        <div className="expanded-right l-0 color-main ">
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
