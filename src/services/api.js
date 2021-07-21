import axios from 'axios';

const api = axios.create({
    baseURL:'https://raw.githubusercontent.com/DioenDJS/Recursos_para-ser-consumido-pela-api-primeiro-projeto-vue/master/api'
});

export default api;
