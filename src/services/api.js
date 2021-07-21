import axios from 'axios';

const api = axios.create({
    baseURL:'http://github.com/DioenDJS/Recursos_para-ser-consumido-pela-api-primeiro-projeto-vue/tree/main/api'
});

export default api;