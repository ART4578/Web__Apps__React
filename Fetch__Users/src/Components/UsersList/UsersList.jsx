import User from "../User/User";

function UsersList({ users, deleteButton }) {
  return (
    <div className="users-container">
      {users.map((user) => (
        <User
          id={user.id}
          login={user.login}
          key={user.id}
          avatar_url={user.avatar_url}
          deleteButton={deleteButton}
        />
      ))}
    </div>
  );
}

export default UsersList;