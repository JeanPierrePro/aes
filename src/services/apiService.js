import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateUserProfile = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};