import cx from 'classnames'
import Link from 'next/link'
import ImageRatio from './elements/ImageRatio'
import styles from './styles/imageCard.module.scss'

const ImageCard = ({image, ratio, hasPadding, linkPage}) => {
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
					{(label && hasLink != '') &&
					<div className={styles.link}>
						{label.toUpperCase()}&nbsp;&nbsp;<gold>&gt;</gold>
					</div>}
				</div>
			</div>
		</Link>
	)
}

export default ImageCard;