import parse from 'html-react-parser';
import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import styles from './navigation.module.scss'
import { useRouter } from "next/router";
	
const handleClick = () => {
	document.getElementById('toggle').checked = false;
}

const PrintNavigation = (items) => {

	const router = useRouter();
	// console.log("router.asPath ::", router.asPath)
	return (
		<>
			{items.map((item) => {
				// console.log("item: ", item.page);
				return (
					<>
						{item.page && 
							<div key={item.page.slug} className={cx(styles.item, {[styles.active]: router.asPath === "/" + item.page.slug})}>
								<Link href={"/" + (item.page.slug === 'home-page' ? '' : item.page.slug)} >
									<a onClick={handleClick}>{parse(item.page.title.replace('/', '/<br/>'))}</a>
								</Link>
							</div>
						}
					</>
				)
				
			})}
		</>
	)
}

const Navigation = ({isFooter, navigationPicture, navigation, navigationLeft, navigationRightTop, navigationRightBottom}) => {
	return (
		<>
			{!isFooter && <input id="toggle" type="checkbox"></input>}
			<div className={cx('navigation', styles.root, {[styles.isFooter]: isFooter})}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<div className={styles.navigation}>
							<div className={cx(styles.items, styles.left)}>
								{/* {PrintNavigation(navigationLeft)} */}
								{PrintNavigation(navigation)}
							</div>
							{/* <div className={styles.right}>
								<div className={cx(styles.items, styles.top)}>
									{PrintNavigation(navigationRightTop)}
								</div>
								<div className={cx(styles.items, styles.bottom)}>
									{PrintNavigation(navigationRightBottom)}
								</div>
							</div> */}
						</div>
						{/* {!isFooter && <div className={styles.picture}>
							{navigationPicture && 
							<Image
								alt={navigationPicture.altText}
								src={navigationPicture.sourceUrl}
								width={navigationPicture.mediaDetails.width}
								height={navigationPicture.mediaDetails.height}
							/>}
						</div>} */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Navigation;