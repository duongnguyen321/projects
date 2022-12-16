import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";

export default function Setting() {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <ion-icon>
        <IonIcon
          name="settings"
          role="img"
          className="md hydrated"
          aria-label="settings"
          onClick={() => {
            setShow(isShow ? false : true);
          }}
        />
      </ion-icon>
      <ul
        className={`setting-list ${isShow ? null : "hide"}`}
        style={{ backgroundColor: "rgb(255, 255, 254)" }}
      >
        <li className="setting-item color-main">
          <i className="fas fa-ban" />
          Danh sách chặn
        </li>
        <li className="setting-item color-main">
          <i className="far fa-play-circle" />
          Chất lượng nhạc
        </li>
        <li className="setting-item color-main">
          <i className="fas fa-external-link-square-alt" />
          Trình phát nhạc
        </li>
        <span className="setting-line" />
        <li className="setting-item color-main">
          <i className="fas fa-info-circle" />
          Giới thiệu
        </li>
        <li className="setting-item color-main">
          <i className="far fa-flag" />
          Góp ý
        </li>
        <li className="setting-item color-main">
          <i className="fas fa-phone-alt" />
          Liên hệ
        </li>
        <li className="setting-item color-main">
          <i className="fab fa-adversal" />
          Quảng cáo
        </li>
        <li className="setting-item color-main">
          <i className="fas fa-notes-medical" />
          Thoả thuận sử dụng
        </li>
        <li className="setting-item color-main">
          <i className="fas fa-shield-alt" />
          Chính sách bảo mật
        </li>
      </ul>
    </>
  );
}
