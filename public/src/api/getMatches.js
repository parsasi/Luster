import axios from 'axios';
import {serverURL } from '../enviroment'
export default (token) => {
    token = encodeURI(token)
    return new Promise((resolve, reject) => {
        const config  = {
            headers: {
              user: localStorage.getItem('token'),
            }
          }
        axios.get(`${serverURL}api/matches` , config)
        .then(data => {
            if(data.statusCode !== 500){
                resolve(data.data)
            }else{
                reject(new Error('Internal Server Error'))
            }
        })
        .catch(e => reject(e))
    })
}