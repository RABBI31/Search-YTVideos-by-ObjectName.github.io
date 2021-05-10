import React from 'react'
import youtube from '../apis/youtube'
import Searchbar from './Searchbar'
import Videolist from './Videolist'

class App extends React.Component{
     state = {videos: [] , selectedVideo: null};
     
    onmyInputSubmit = async myInput =>{
       const response = await youtube.get('/search', {
            params : {
                q: myInput
            }
        });


        this.setState({videos : response.data.items})
    };

    onVideoSelect =(video)=>{
        console.log('For the tap',  video);
    };
    render() {
        return(
            <div className='ui container'><Searchbar onFormSubmit = {this.onmyInputSubmit}/>
            <Videolist onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
            </div>
        )
    }
}
export default App