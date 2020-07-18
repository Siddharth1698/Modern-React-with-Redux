import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';


const KEY = 'AIzaSyAvQ-lu2fotjcjXoKgOXXMv7JkKcFu6B8o';

class App extends React.Component{

    state = {videos: []};

    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search',{
            params: {
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
                q:term
            }
        });

        this.setState({videos: response.data.items});

    };


    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList videos={this.state.videos}/>
            </div>
        ); 
    }
}

export default App;