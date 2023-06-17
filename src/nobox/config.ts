import { Config, getFunctions, getSchemaCreator } from "nobox-client";

export const config: Config = {
  endpoint: "https://api.nobox.cloud",
  project: "user",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NDNmMTBkNjQxYzFhNTk1NWEyYjg2MzIiLCJlbWFpbCI6ImZhdm91cnNhbXNvbjM0N0BnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzY4NjkyNjg0P3Y9NCIsImZpcnN0TmFtZSI6InNhbXNvbi1mYXZvdXIiLCJsYXN0TmFtZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wNC0xOFQyMTo1MToxOC4yMzdaIiwidXBkYXRlZEF0IjoiMjAyMy0wNC0xOFQyMTo1MToxOC4yMzdaIn0sImlhdCI6MTY4Njk4NzMyMX0.YA4NeJDJGtWS7VjBuXgxSOcaariPOUO96Dc348ykKLI",
};
export const createSchema = getSchemaCreator(config);
export const Nobox = getFunctions(config);
