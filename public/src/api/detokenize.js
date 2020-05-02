import axios from 'axios';
import {serverURL } from '../enviroment'
export default (token) => {
    token = encodeURI(token)
    return new Promise((resolve, reject) => {
        axios.get(`${serverURL}api/detokenize?token=${token}`)
        .then(data => {
            resolve(data.data)
        })
        .catch(e => reject(e))
    })
}