import CryptoJS from 'crypto-js'

const SECRET_KEY = '4G&tivo'

export function encrypt(data) {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
    return encryptedData
  }
  
export function decrypt(encryptedData) {
    const decryptedBytes = CryptoJS.AES.decrypt(CryptoJS.enc.Base64.parse(encryptedData).toString(CryptoJS.enc.Utf8), SECRET_KEY)
    try {
        // Attempt to convert to UTF-8
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8))
        return decryptedData;
    } catch (e) {
        // Handle malformed UTF-8 data
        console.error('Error decrypting data:', e);
        return null; // or any other fallback value
    }
}

