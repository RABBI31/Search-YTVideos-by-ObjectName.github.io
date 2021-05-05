import React from 'react'
import youtube from '../apis/youtube'
import Searchbar from './Searchbar'
import Videolist from './Videolist'

class App extends React.Component{
     state = {videos: []}
    onmyInputSubmit = async myInput =>{
       const response = await youtube.get('/search', {
            params : {
                q: myInput
            }
        });


        this.setState({videos : response.data.items})
    };
    render() {
        return(
            <div><Searchbar onFormSubmit = {this.onmyInputSubmit}/>
            <Videolist videos = {this.onmyInputSubmit}/>
            </div>
        )
    }
}
export default App