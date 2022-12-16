import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.name} style={{ width: 100 }} />
        <div>
          <h2>Xin Chào {user.nickname} !</h2>
          <p>Vị trí: {user.locale}</p>
          <p>email {user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
