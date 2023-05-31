import axios from "axios";

const Api = axios.create({
  baseURL: "https://desafio-fullstack-deploy.onrender.com/",
  timeout: 5000,
});

export default Api;
