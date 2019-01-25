import axios from "axios";

export function callGoogleBooks (query, field)  {
  return axios.post("/search", {
    query,
    field
  });
  
};