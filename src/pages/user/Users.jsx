import axios from "axios";
import React, { useEffect } from "react";

export default function Users() {

  const getUsers = async () => {
    try {
      console.log("BASE URL:", import.meta.env.VITE_BASE_URL);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
      console.log("Users data:", response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>Users</div>
  );
}
