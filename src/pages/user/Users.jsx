import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";
import React from "react";
import axios from "axios";
export default function Users() {
  const {data,isLoading , isError}= useFetch("/users");
  const deleteUser = async (id) => {
    alert(`Delete user with id: ${id}`);
    try  {
        const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`)
        alert("Delete response:", res.data);
    }catch (error) {
      console.error("Error deleting user:", error);
    }
  }
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
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                 <Link to={`/user/${user.id}`} className="btn btn-success"> details </Link>
                 <button onClick={() => deleteUser(user.id)} className="btn btn-danger"> Delete </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {console.log("render:", data)}
    </>
  );
}
