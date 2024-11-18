import cx from 'classnames'
import Link from 'next/link'
import styles from './styles/burger.module.scss'

const Burger = () => {

	return (
		<div className={cx('burger', styles.root)}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<Link href="/" className={styles.linkHome} passHref>&nbsp;</Link>
				</div>
				<div className={styles.right}>
					<label htmlFor="toggle" className={cx('hamburger', styles.hamburger)}>
						<div className="topBun"></div>
						<div className="meat"></div>
						<div className="bottomBun"></div>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Burger;

