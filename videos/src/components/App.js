import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const KEY = 'AIzaSyAvQ-lu2fotjcjXoKgOXXMv7JkKcFu6B8o';

class App extends React.Component{

    state = {videos: [], selectedVideo: null};

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

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    };


    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        ); 
    }
}

export default App;