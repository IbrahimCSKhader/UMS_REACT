import React from "react";
import { useForm } from "react-hook-form";

export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddUser = (data) => {
    alert(`Add user with:
    Name: ${data.name}
    Email: ${data.email}
    Age: ${data.age}`);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(handleAddUser)}>
        <div className="form-floating mb-3">
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="form-control"
            id="userName"
            placeholder="User name"
          />
          <label htmlFor="userName">User name</label>

          {errors.name && (
            <p className="text-danger small">{errors.name.message}</p>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            type="email"
            className="form-control"
            id="userEmail"
            placeholder="User email"
          />
          <label htmlFor="userEmail">Email</label>

          {errors.email && (
            <p className="text-danger small">{errors.email.message}</p>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            {...register("age", {
              required: "Age is required",
              min: { value: 1, message: "Age must be positive" },
            })}
            type="number"
            className="form-control"
            id="userAge"
            placeholder="User age"
          />
          <label htmlFor="userAge">Age</label>

          {errors.age && (
            <p className="text-danger small">{errors.age.message}</p>
          )}
        </div>

        <button className="btn btn-outline-dark" type="submit">
          Add user
        </button>
      </form>
    </div>
  );
}
