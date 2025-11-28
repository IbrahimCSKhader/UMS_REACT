import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
export default function Users() {
  const { data, isLoading, isError } = useFetch("/users");
  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/users/${id}`
      );
      if (res.status == 200) {
        toast.success("Delete user done", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div className="alert alert-danger">Error: {isError}</div>;
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
          {data.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <Link to={`/user/${user.id}`} className="btn btn-success">
                  {" "}
                  details{" "}
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn btn-danger"
                >
                  {" "}
                  Delete{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {console.log("render:", data)}
    </>
  );
}
