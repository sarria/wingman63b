import React, { useState } from 'react';
import styles from './video.module.scss';
import ReactPlayer from 'react-player';

const Video = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(true); // Ensure autoplay is triggered

    return data?.videoUrl && (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {/* Aspect Ratio Box */}
                <div className={styles.box}>
                    <ReactPlayer
                        url={data.videoUrl}
                        width="100%"
                        height="100%"
                        playing={isPlaying} // Autoplay enabled
                        muted={true} // Ensure autoplay works in browsers
                        light={false} // Disable preview image for immediate playback
                        loop={true} // Enable looping
                        controls={false} // Optional: Show video controls
                    />
                </div>
            </div>
        </div>
    );
};

export default Video;
