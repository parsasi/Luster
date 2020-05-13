import axios from 'axios';
import {serverURL } from '../enviroment'
export default (swipeeEmail , isLiked) => {
  console.log(isLiked)
    return new Promise((resolve, reject) => {
        const config  = {
            headers: {
              user: localStorage.getItem('token'),
            }
          }
        axios.post(`${serverURL}api/swiped` , {swipeeEmail , isLiked} , config)
        .then(data => {
            resolve(data.data)
        })
        .catch(e => reject(e))
    })
}