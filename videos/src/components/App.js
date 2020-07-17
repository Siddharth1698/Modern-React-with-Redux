import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';

const KEY = 'AIzaSyAvQ-lu2fotjcjXoKgOXXMv7JkKcFu6B8o';

class App extends React.Component{

    onTermSubmit = (term) => {
        Youtube.get('/search',{
            params: {
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });

    };


    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;