import axios from 'axios';


const instance = axios.create();
instance.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

instance.defaults.headers.common['Authorization']  = 'AUTH TOKEN from Instance';


export default instance;