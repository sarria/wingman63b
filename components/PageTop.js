// import { ReactElement, forwardRef } from 'react';
// import Link from 'next/link'
// import cx from 'classnames'
// import Image from 'next/image'
import Logo from './Logo'
import TopNav from './TopNav'
import styles from './pageTop.module.scss'

function PageTop({isHomePage, navigation}) {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<Logo className={styles.logo} isHomePage={isHomePage} />
				<TopNav className={styles.topNav} navigation={navigation} />
			</div>
		</div>
	)
}

export default PageTop