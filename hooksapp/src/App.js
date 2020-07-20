import React from 'react'; 
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'whats react?',
        content: 'Its a framework'
    },
    {
        title: 'whats python?',
        content: 'its a snape :p'
    }
];

export default () => {
    return(
        <div>
            <Search />
        </div>
    );
};