import axios from 'axios';

const configs = {
    projectName: 'OMU UBYS',
    apiUrl: axios.create({
        baseURL: 'http://localhost:60805/api',
        withCredentials: true,
    }),
};

export default configs;