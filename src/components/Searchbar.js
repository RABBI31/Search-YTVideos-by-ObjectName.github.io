import React from 'react'
import youtube from '../apis/youtube';

class Searchbar extends React.Component{
    state = {myInput : ''};

    onInputchange = event =>{
        this.setState({myInput : event.target.value});

    };

    onFormSubmit = event => {
       event.preventDefault();
       this.props.onFormSubmit(this.state.myInput);
    };
    render(){
        return(
            <div className = "search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className = "field">
                        <label style={{fontSize: '20px'}}>Video Search</label>
                        <input type = "text" 
                        value = {this.state.myInput}
                        onChange={this.onInputchange} />
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar