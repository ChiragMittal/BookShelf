import axios from "axios";

export function callGoogleBooks (query, field)  {
  return axios.post("http://localhost:3000/search", {
    query,
    field
  });
  
};