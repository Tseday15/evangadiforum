import axios from "axios";

const instance = axios.create({
  baseURL: "https://vast-plum-scallop-slip.cyclic.app",

  withCredentials: true,
});

export default instance;