import axios from 'axios'

const KEY = 'AIzaSyA6EK0AstrVHxz9Jwf9TPXm79ft6BgoVXY'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3' ,
    params : {
        part : 'snippet',
        maxResults: 5,
        key : KEY
        
    }
});