import axios from "axios";

// Utilizar localhost não funciona
// Substituam localhost pelo seu ip privado
// Rodem esse comando no terminal para encontrar seu endereço ip: hostname -I | awk '{print $1}'
const api = axios.create({
    baseURL: `http://localhost:3003/`
    // baseURL: 'http://192.168.0.46:8000/'

});

export default api;