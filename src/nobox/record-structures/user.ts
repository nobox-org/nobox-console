import { Space } from "nobox-client";
import { createSchema } from "../config";

interface User {
  email: string;
  password: string;
  firstName: string;
  age: number;
}

export const UserStructure: Space<User> = {
  space: "User",
  description: "A Record Space for Users",
  structure: {
    email: {
      description: "User's Email",
      type: String,
      required: true,
    },
    password: {
      description: "User's Password",
      required: true,
      type: String,
      hashed: true,
    },
    firstName: {
      description: "User's First Name",  
      required: true,
      type: String,
    },
    age: {
      description: "User's Street Number",
      required: false,
      type: Number,
    },
  },
};

export const UserModel = createSchema<User>(UserStructure);
