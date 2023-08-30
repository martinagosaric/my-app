import React from "react";
import "../index";

function UserDetails({ user }) {
  if (!user) {
    return null;
  }
  return (
    <div>
      <div className="container">
        <img
          src={user.avatar_url}
          alt="Profilna slika"
          style={{ width: "30%" }}
        />
        <h1>{user.name}</h1>
      </div>
      <p>
        <strong>BIO: </strong>
        {user.bio}
      </p>
      <p>
        <strong>LOCATION: </strong> {user.location}
      </p>
      <p>
        <strong>REPOSITORIES: </strong> {user.name}
      </p>
    </div>
  );
}

export default UserDetails;
