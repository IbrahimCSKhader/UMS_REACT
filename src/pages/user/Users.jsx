import useFetch from "../../hooks/useFetch";
import React from "react";
export default function Users() {
  const {data,isLoading , isError}= useFetch("/users");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div className="alert alert-danger">
        Error: {isError}
      </div>
    );
  }
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {console.log("render:", data)}
    </>
  );
}
