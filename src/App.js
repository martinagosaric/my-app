import React, { useState } from "react";
import UserForm from "./components/UserForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import UserDetails from "./components/UserDetails.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import UserRepos from "./components/UserRepos.jsx";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  function searchUser(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Korisnik nije pronađen");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setUser(null);
      });
  }

  return (
    <div>
      {user ? (
        <div className="second-container">
          <UserDetails user={user} />
          <UserRepos username={user.login} /> <br></br>
          <Button
            variant="secondary"
            style={{ width: "100%" }}
            onClick={() => setUser(null)}
          >
            Reset
          </Button>
        </div>
      ) : error ? (
        <div className="error">
          <ErrorMessage message={error} />
          <Button
            variant="secondary"
            style={{ width: "100%" }}
            onClick={() => setError(null)}
          >
            Reset
          </Button>
        </div>
      ) : (
        <UserForm onSearchUser={searchUser} />
      )}
    </div>
  );
}

export default App;
