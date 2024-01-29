// apiService.js
import axios from 'axios';

const baseURL = 'https://players-app-flax.vercel.app/players';

const playerService = axios.create({
baseURL,
});

export const getPlayers = () => playerService.get();

export const getPlayer = (playerId) => {
return playerService.get(`/${playerId}`);
};

export const createPlayer = (playerData) => {
return playerService.post('/', playerData);
};

export const updatePlayer = (playerId, playerUpdateData) => {
return playerService.put(`/${playerId}`, playerUpdateData);
};

export const deletePlayer = (playerId) => {
return playerService.delete(`/${playerId}`);
};