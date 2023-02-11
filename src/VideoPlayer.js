import React from 'react';


const VideoPlayer = (props) => {
console.log(props)

  return (
   
    <div id="wrapper">
    {props.video.map(video => (
      <div key={video.id.videoId}>
        <h3>{video.snippet.title}</h3>
      
        <iframe title='videoPlayer' width="420" height="315"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}>
        </iframe>

        <h5 className='text-white mr-4'>{video.snippet.description}</h5>
      </div>
    ))}
</div>  


      
    
    
    
    
  );
};

export default VideoPlayer;