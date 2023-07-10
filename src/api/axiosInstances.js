import axios from 'axios';
import getDecryptedToken from '../helpers/cookie'

const token=getDecryptedToken()

const axiosInstance = axios.create({
  baseURL: '', 
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json',
    'authorization':token
  }
});

export default  axiosInstance