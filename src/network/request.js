import Axios from 'axios';


const g = Axios.create();
const home = Axios.create({
    baseURL:'http://8.134.120.26:8008/api'
});

export {
    g,
    home
}