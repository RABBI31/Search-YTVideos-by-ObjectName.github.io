import React from 'react'
import youtube from '../apis/youtube'
import Searchbar from './Searchbar'

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
            I have {this.state.videos.length} videos.
            </div>
        )
    }
}
export default App