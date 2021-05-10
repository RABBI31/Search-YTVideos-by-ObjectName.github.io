import axios from 'axios'

const KEY = 'AIzaSyA1sunH-F3vlevT89dL26Jnqu6xtkXGeH4'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3' ,
    params : {
        part : 'snippet',
        maxResults: 5,
        key : KEY
        
    }
    
});