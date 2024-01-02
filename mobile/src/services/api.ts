import axios from 'axios';

//O React Native exige que o baseUrl seja Https, porem da para driblar usando o IP
const api = axios.create({
  baseURL: 'http://192.168.15.7:3333',
});

export { api };
