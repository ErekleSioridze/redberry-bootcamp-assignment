import axios from "axios";

export const $axios = axios.create({
  baseURL: "https://bootcamp-2022.devtest.ge/api/",
});
