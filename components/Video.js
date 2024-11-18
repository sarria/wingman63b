import styles from './styles/video.module.scss'
import ReactPlayer from 'react-player'

// https://github.com/CookPete/react-player
// https://css-tricks.com/aspect-ratio-boxes/

const Video = ({data}) => {

	// console.log('video', data)

	return data?.videoUrl && (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div style={{"--aspect-ratio":16/9}} className={styles.box}>
					<ReactPlayer 
						url={data.videoUrl} 
						width='100%'
						height='100%'
						light={true}
					/>
				</div>
			</div>
		</div>
	)
}

export default Video;