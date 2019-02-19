import axios from 'axios'

export function addUser (userData){
    
    return axios.post("http://localhost:3000/register", {userData});
  };

  export const loginUser = (userData) => {
    return axios.post("http://localhost:3000/login", {userData});
  };  

  export const callLogout = token => {
    return axios.delete("/logout", { headers: { "x-auth": token } });
  };