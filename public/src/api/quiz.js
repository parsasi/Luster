import axios from 'axios';
import {serverURL } from '../enviroment'
export default (quiz) => {
    return new Promise((resolve, reject) => {
        const config  = {
            headers: {
              user: localStorage.getItem('token'),
            }
          }
        axios.post(`${serverURL}api/quiz` , {quiz} , config)
        .then(data => {
            console.log(data)
            resolve()
        })
        .catch(e => reject(e))
    })
}