import { useEffect, useState } from "react";
import UsersList from "./Components/UsersList/UsersList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [staticUsers, setStaticUsers] = useState([]);
  const [inpValue, setInpValue] = useState("");

  const deleteButton = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((responce) => responce.json())
      .then((json) => {
        setUsers(json);
        setStaticUsers(json);
      });
  }, []);

  const inputChangeHandler = (e) => {
    setInpValue(e.target.value);
  };

  useEffect(() => {
    if (inpValue.length > 2) {
      setUsers(staticUsers.filter((user) => user.login.includes(inpValue)));
    } else {
      setUsers(staticUsers);
    }
  }, [inpValue]);

  return (
    <div>
      <input className="input" value={inpValue} onChange={inputChangeHandler} placeholder="Enter the person's name"/>
      <UsersList users={users} deleteButton={deleteButton} />
    </div>
  );
}

export default App;