import axios from "axios"
import md5 from 'md5'

const publickey = process.env.REACT_APP_PUBLICKEY
const privatekey = process.env.REACT_APP_PRIVATEKEY

const time = Number(new Date())

const hash = md5(time + privatekey + publickey)

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    apikey: publickey,
    ts: time,
    hash,
  },
})

export default api
