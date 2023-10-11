import axios from "axios";

export const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://dropmail.me/api/graphql/",
    timeout: 8000,
})