import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../index";

function UserRepos({ username }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  }, [username]);

  return (
    <div>
      <ListGroup>
        {repos &&
          repos.map((repo) => (
            <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default UserRepos;
