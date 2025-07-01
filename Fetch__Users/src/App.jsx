import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //users data
  const [users, setUsers] = useState([]);
  const [staticUsers, setStaticUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //fetch users
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(json => {
        setUsers(json);
        setStaticUsers(json);
      })
      .catch(error => console.error(error));
  }, []);

  //delete user
  const deleteButton = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //change input value
  const inputChange = (e) => setInputValue(e.target.value);

  //search users
  useEffect(() => {
    if (inputValue.length > 2) {
      setUsers(staticUsers.filter((user) => user.login.includes(inputValue)));
    } else {
      setUsers(staticUsers);
    };
  }, [inputValue]);

  return (
    <div>
      {/*input*/}
      <input className="input" value={inputValue} onChange={inputChange} placeholder="Enter Your Name"/>
      {/*users*/}
      <div className="users-container">
      {
        users.map((user) => {
          return (
            <div className="user-container" key={user.id}>
              <button className="btn" onClick={() => deleteButton(user.id)}>X</button>
              <img src={user.avatar_url} alt="image" className="img" />
              <span>ID: {user.id}</span>
              <h3>Name: {user.login}</h3>
            </div>
          );
        })
      }
      </div>
    </div>
  );
};

export default App;