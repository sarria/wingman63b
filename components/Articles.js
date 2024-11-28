import parse from 'html-react-parser';
import styles from './articles.module.scss'
import ImageRatio from './elements/ImageRatio'
import { generateIdFromLabel } from './utils/shared';

const Articles = ({data}) => {
	// console.log('Articles data ::', data)
	
	return data?.articles &&  (
		<div className={styles.root} id='articles'>
			<div className={styles.wrapper}>
			{data.articles.map((item, idx) => item.text && (
				<div key={idx} id={generateIdFromLabel(item.headline)} className={styles.item}>
					<div className={styles.content}>
						<div className={styles.photo}>
							<div className={styles.imageRatio}>
								<ImageRatio image={item.photo} ratio='75.4%' />
							</div>
							<div className={styles.yellowBar} />
						</div>
						{item.text && <div className={styles.textWrap}>
							<div className={styles.text}>
								<h2 className={styles.headline}>{item.headline}</h2>
								<div className={styles.yellowBar} />
								{parse(item.text)}
							</div>
						</div>}
					</div>
				</div>	
			))}
			</div>
		</div>
	)
}

export default Articles;