import axios from "axios"

const instance = axios.create ({
    baseURL:"http://localhost:5001/indiamart-5e9a0/us-central1/api" //The api (cloud function)
});
export default instance;