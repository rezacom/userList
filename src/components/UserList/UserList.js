import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import '../../App.css'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(true);
  const [link, setLink] = useState("https://api.randomuser.me/");

  useEffect(() => {
    if (link) {
      fetch(link)
        .then(res => res.json())
        .then(res => {
          setUsers(res.results[0]);
          setStatus(false);
        });
    }
  }, [link]);

  const handleLink = myLink => {
    setLink("");
    setTimeout(() => {
      setLink(myLink);
    }, 1000);
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>RANDOM USER GENERATOR</h1>
          <p>A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.</p>
          <button className="header__btn" onClick={() => handleLink("https://api.randomuser.me/")}>
            new user
          </button>
        </header>
        {status ? "...loading" : <UserCard myuser={users} />}
        
      </div>
    </>
  );
};

export default UserList;
