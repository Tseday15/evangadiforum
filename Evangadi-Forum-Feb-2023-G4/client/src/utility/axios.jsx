import axios from "axios";

const instance = axios.create({
  // baseURL: "https://vast-plum-scallop-slip.cyclic.app",
baseURL:"http://localhost:8889",
  withCredentials: true,
});

export default instance;