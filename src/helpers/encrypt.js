import CryptoJS from 'crypto-js'

const SECRET_KEY = '4G&tivo'

export function encrypt(data) {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
    return encryptedData
  }
  
export function decrypt(encryptedData) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY)
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8))
    return decryptedData;
}

