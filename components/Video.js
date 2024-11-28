import React, { useState } from 'react';
import styles from './video.module.scss';
import ReactPlayer from 'react-player';

const Video = ({ data }) => {
    return data?.videoUrl ? (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <video
            className={styles.video}
            src={data.videoUrl}
            width="100%"
            height="100%"
            controls
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    ) : (
      <div>No video available</div>
    );
};

export default Video;

