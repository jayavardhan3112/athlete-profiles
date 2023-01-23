import axios from 'axios';

const Axios = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: false,
  maxContentLength: 500000000,
});

export default class API {
  static getAllUsers() {
    return Axios.get("/users");
  }
  static getUserDetails(uid) {
    return Axios.get("/users/"+String(uid));
  }
  static addUser(request_data) {
    return Axios.post("/add_user", request_data);
  }
  static editUser(request_data) {
    return Axios.put("/edit_user", request_data);
  }
}