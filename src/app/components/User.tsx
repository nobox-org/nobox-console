"use client";
import { UserModel } from "@/nobox/record-structures/user";
import React, { useEffect, useState } from "react";

interface formData {
  email: string;
  password: string;
  firstName: string;
  age: number;
}

export default function UserComponent() {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
    firstName: "",
    age: 0,
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "age" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const returnedData = await UserModel.insertOne(formData);
    console.log("User created:", returnedData);
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
