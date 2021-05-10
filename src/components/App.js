import React from 'react'
import youtube from '../apis/youtube'
import Searchbar from './Searchbar'
import Videolist from './Videolist'
import VideoDetail from './VideoDetail'

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
        this.setState({selectedVideo: video })
    };
    render() {
        return(
            <div className='ui container'><Searchbar onFormSubmit = {this.onmyInputSubmit}/>
            <VideoDetail video ={this.state.selectedVideo} />
            <Videolist onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
            </div>
        )
    }
}
export default App