import parse from 'html-react-parser';
import cx from 'classnames'
import styles from './styles/label.module.scss'

const Label = ({data}) => {
	// console.log("label ::", data)
	return data?.label && (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<h2 className={cx({[styles.marginLeft]: data.marginLeft})}>{parse(data.label.toUpperCase())}</h2>
			</div>
		</div>
	)
}

export default Label;