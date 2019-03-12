import React from 'react';
const VideoDetail = ({ selectedVideo }) => {
    if (selectedVideo) {
        const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title='videoPlayer' src={videoSrc}></iframe>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{selectedVideo.snippet.title}</h4>
                    <p>{selectedVideo.snippet.description}</p>
                </div>

            </div>
        );
    }
    return <div>no select</div>

}
export default VideoDetail;