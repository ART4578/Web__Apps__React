import { useState, useCallback } from "react";

function User({ id, login, avatar_url, deleteButton }) {
  const [clicked, setClicked] = useState(false);

  const selectUser = useCallback(() => {
      setClicked(!clicked);
    }, [clicked,setClicked]);

  return (
    <div className={`user-container ${clicked ? "clicked" : ""}`}>
      <button className="btn" onClick={() => deleteButton(id)}>X</button>
      <img src={avatar_url} alt="image" className="img" />
      <div className="selectButton" onClick={selectUser}>
        Select
      </div>
      <span>ID: {id}</span>
      <h3>{login}</h3>
    </div>
  );
}

export default User;