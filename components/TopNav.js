import cx from 'classnames'
import styles from './topNav.module.scss'
import parse from 'html-react-parser';
import Image from 'next/image'
import Link from 'next/link'
import { handleScrollToSection } from './utils/shared';
import { useRouter } from "next/router";
	
const handleClick = () => {
	document.getElementById('toggle').checked = false;
}

const Item = ({item, toggleMenu}) => {
	const router = useRouter();
	// console.log("router.asPath ::", router.asPath)
	// console.log("nav item: ", item, (!item.page && item.label && item.id) ? 'si' : 'no');
	return (
		<>
			{item.page && 
			<div key={item.page.slug} className={cx(styles.item, {[styles.active]: router.asPath === "/" + item.page.slug})}>
				<Link href={"/" + (item.page.slug === 'home-page' ? '' : item.page.slug)} >
					<a onClick={handleClick}>{parse(item.page.title.replace('/', '/<br/>'))}</a>
				</Link>
			</div>}
			{(!item.page && item.label && item.id) &&
			<div key={item.id} className={cx(styles.item)}>
				<a onClick={() => {
					handleScrollToSection(item.id)
					toggleMenu()
				}}>
					{item.label}
				</a>
			</div>
			}			
		</>
	)
}

function TopNav({navigation, isOpen, toggleMenu}) {
	return (
		<div className={cx(styles.root, {[styles.isOpen]:isOpen})}>
			<div className={styles.wrapper}>
				{navigation.map((item) => <Item item={item} toggleMenu={toggleMenu} />)}				
			</div>
		</div>
	)
}

export default TopNav