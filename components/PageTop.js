import { useState } from 'react';
import Burger from './Burger'
import Logo from './Logo'
import TopNav from './TopNav'
import styles from './pageTop.module.scss'

function PageTop({isHomePage, navigation}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
	  setIsOpen(!isOpen); // Toggle the state
	};

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<Logo className={styles.logo} isHomePage={isHomePage} />
				<div className={styles.navigation}>
					<TopNav navigation={navigation} isOpen={isOpen} toggleMenu={toggleMenu} />
					<Burger isOpen={isOpen} toggleMenu={toggleMenu} />
				</div>
			</div>
		</div>
	)
}

export default PageTop