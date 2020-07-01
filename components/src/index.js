import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';

const App = () => {
    return (
    <div className="ui container comments">
        <CommentDetails author="Sam" timeAgo="Today at 4:13pm" commentText="hello guyz" avatarimg={faker.image.avatar()}/>
        <CommentDetails author="Alex" timeAgo="Today at 5:43pm" commentText="good fellaw guyz" avatarimg={faker.image.avatar()}/>
        <CommentDetails author="Jane" timeAgo="Today at 6:30pm"commentText="nice mahn" avatarimg={faker.image.avatar()}/>
    </div>
    );
};

ReactDOM.render(<App/> , document.querySelector('#root'));