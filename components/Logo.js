import { ReactElement, forwardRef } from 'react';
import Link from 'next/link'
import cx from 'classnames'
import Image from 'next/image'
import LogoImage from '../images/wingman-final-logo@2x.png'
import styles from './logo.module.scss'

function Logo({className, isHomePage}) {
	return (
		<div className={cx(className, styles.root)}>
			<div className={styles.wrapper}>
				<Link href="/" passHref>
					<Image
						alt=''
						src={LogoImage}
						layout="responsive"
					/>
				</Link>
			</div>
		</div>
	)
}

export default Logo