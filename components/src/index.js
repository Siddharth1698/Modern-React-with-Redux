import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
        <CommentDetails author="Sam" timeAgo="Today at 4:13pm" commentText="hello guyz" avatarimg={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetails author="Alex" timeAgo="Today at 5:43pm" commentText="good fellaw guyz" avatarimg={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetails author="Jane" timeAgo="Today at 6:30pm"commentText="nice mahn" avatarimg={faker.image.avatar()}/>
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App/> , document.querySelector('#root'));