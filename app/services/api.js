import axios from "axios";

import {API_HOST, API_PORT} from '@env';

// Utilizar localhost não funciona
// Substituam localhost pelo seu ip privado
// Rodem esse comando no terminal para encontrar seu endereço ip: hostname -I | awk '{print $1}'

const api = axios.create({
    baseURL: `http://${API_HOST}:${API_PORT}/api`,
    timeout: 1000
});
export default api;
