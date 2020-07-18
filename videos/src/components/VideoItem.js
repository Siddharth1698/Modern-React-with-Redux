import React from 'react';

const VideoItem = ({video}) =>{
return (
<div className="item">
   <img className= "ui image" src= {video.snippet.thumbnails.medium.url} />
    <div className="content">   {video.snippet.title}</div>
    </div>
    );
};

export default VideoItem;
