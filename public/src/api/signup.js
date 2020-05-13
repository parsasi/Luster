import axios from 'axios';
import {serverURL } from '../enviroment'
export default (user) => {
    return new Promise((resolve, reject) => {
        axios.post(`${serverURL}api/signup` , {user:user})
        .then(data => {
            resolve()
        })
        .catch(e => reject(e))
    })
}