import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map(data.node_id)))
      .then(() => setError("Something went wrong!"));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
};

export default Users;
