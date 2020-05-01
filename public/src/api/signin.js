import axios from 'axios';
import {serverURL } from '../enviroment'
export default (user) => {
    return new Promise((resolve, reject) => {
        axios.post(`${serverURL}api/signin` , {user:user})
        .then(data => {
            resolve(data.data)
        })
        .catch(e => reject(e))
    })
}