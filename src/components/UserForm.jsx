import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../index";

function UserForm({ onSearchUser }) {
  const [searchItem, setSearchItem] = useState("");

  function handleSearch() {
    if (searchItem.trim() === "") {
      alert("Unesite ime korisnika");
    }
    onSearchUser(searchItem);
  }

  return (
    <div className="first-container">
      <p>
        <label>GitHub Username:</label>
      </p>
      <p>
        <input
          style={{ width: "100%" }}
          type="text"
          placeholder="e.g. facebook"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </p>
      <Button
        variant="secondary"
        style={{ width: "100%" }}
        onClick={handleSearch}
      >
        Pronađi korisnika
      </Button>
    </div>
  );
}

export default UserForm;
