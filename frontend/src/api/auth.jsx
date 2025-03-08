import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";

export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const logout = () => localStorage.removeItem("token");
