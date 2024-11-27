import cx from 'classnames'
import Link from 'next/link'
import ImageRatio from './elements/ImageRatio'
import styles from './imageCard.module.scss'

const ImageCard = ({index, image, ratio, hasPadding, linkPage, imagesLayout}) => {
	// console.log('imageCard :: ', image, ratio)
	const hasLink = image.linkPage?.slug ? 'hasLink' : ''
	const label = image.linkLabel || image.linkPage?.title
	const LinkTo = image.linkPage?.slug || linkPage?.slug || null

	// console.log('link ', image.linkPage?.slug || '/')
	// console.log('LinkTo :: ', LinkTo)

	return (
		<Link href={LinkTo || 'javascript:void(0)'} id={image.databaseId} passHref>
			<div className={cx(styles.root)}>
				<div className={cx(styles.wrapper, styles[hasPadding], {[styles.hasLink]:LinkTo}, hasLink)}>
					<div className={cx(styles.image)}>
						<ImageRatio image={image.image} ratio={ratio} />
					</div>
					{imagesLayout !== '5col' && (label && hasLink != '') &&
					<div className={styles.link}>
						{label.toUpperCase()}&nbsp;&nbsp;<gold>&gt;</gold>
					</div>}
					{imagesLayout === '5col' &&
					<div data-index={index} className={styles.label} style={{backgroundColor: index % 2 == 0 ? 'white' : '#e5e5e5'}}>
						{label ? label.toUpperCase() : <span>&nbsp;</span>}
					</div>}
				</div>
			</div>
		</Link>
	)
}

export default ImageCard;