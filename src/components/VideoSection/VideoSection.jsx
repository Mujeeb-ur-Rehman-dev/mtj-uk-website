import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section-wrapper">
      <div className="video-container">
        <div className="video-thumbnail">
          <div className="play-button">
            <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="video-info">
            <div className="video-title">How we are Fighting Hunger in Pakistan | Molana Tariq Jamil Foundation</div>
            <div className="video-channel">MTJ FOUNDATION CANADA</div>
          </div>
        </div>
        <div className="watch-on-youtube">Watch on YouTube</div>
      </div>
    </section>
  );
};

export default VideoSection;
