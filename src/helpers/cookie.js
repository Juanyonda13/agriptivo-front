import Cookies from 'js-cookie';
import {decrypt} from './encrypt'

const COOKIE_NAME = 'token';

export default function getDecryptedToken() {
    const encryptedUserId = Cookies.get(COOKIE_NAME);
    if (encryptedUserId) {
      const decryptedUserId = decrypt(encryptedUserId); // Descifra los datos del usuario (implementa tu propio descifrado)
      return decryptedUserId;
    }
    return null;
}