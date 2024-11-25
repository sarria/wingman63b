import cx from 'classnames'
import styles from './topNav.module.scss'
import parse from 'html-react-parser';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
	
const handleClick = () => {
	// document.getElementById('toggle').checked = false;
}

const Item = ({item}) => {
	const router = useRouter();
	// console.log("router.asPath ::", router.asPath)
	return (
		item.page && <div key={item.page.slug} className={cx(styles.item, {[styles.active]: router.asPath === "/" + item.page.slug})}>
			<Link href={"/" + (item.page.slug === 'home-page' ? '' : item.page.slug)} >
				<a onClick={handleClick}>{parse(item.page.title.replace('/', '/<br/>'))}</a>
			</Link>
		</div>
	)
}

function TopNav({className, navigation}) {
	return (
		<div className={cx(className, styles.root)}>
			<div className={styles.wrapper}>
				{/* {PrintNavigation(navigation)} */}
				{navigation.map((item) => <Item item={item} />)}				
			</div>
		</div>
	)
}

export default TopNav