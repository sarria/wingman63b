import parse from 'html-react-parser';
import Script from 'next/script'
import styles from './styles/bios.module.scss'
import ImageRatio from './elements/ImageRatio'

const Bios = ({data}) => {
	// console.log('data ::', data)
	return data?.bios &&  (
		<div className={styles.root} id='bios'>
			<div className={styles.wrapper}>
			{data.bios.map((item, idx) => item.bio && (
				<div key={idx} className={styles.item} id={item.name}>
					<div className={styles.content}>
						<div className={styles.name}>
							<h2>{item.name}</h2>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.photo}>
							<div className={styles.imageRatio}>
								<ImageRatio image={item.photo} ratio='80%' />
							</div>
						</div>
						{item.bio && <div className={styles.bio}>
							<div className={styles.text}>
								{parse(item.bio)}
							</div>
						</div>}
					</div>
				</div>	
			))}
			</div>
			{/* <Script
				id="stripe-js"
				afterInteractive={true}
				src='/bios.js'
			/>			 */}
		</div>
	)
}

export default Bios;