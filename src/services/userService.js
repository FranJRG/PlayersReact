// apiService.js
import axios from 'axios';

const baseURL = 'https://players-app-flax.vercel.app/users';

const userService = axios.create({
baseURL,
});

export const getUsers = () => userService.get();

export const getUser = (userId) => {
return userService.get(`/${userId}`);
};

export const createUser = (userData) => {
return userService.post('/', userData);
};

export const updateUser = (userId, userUpdateData) => {
return userService.put(`/${userId}`, userUpdateData);
};

export const deleteUser = (userId) => {
return userService.delete(`/${userId}`);
};