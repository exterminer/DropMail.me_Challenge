import axios from "axios";

export const api = axios.create({
    baseURL: "https://dropmail.me/api/graphql/",
    timeout: 8000,
})