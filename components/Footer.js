import parse from 'html-react-parser';
import cx from 'classnames'
import Image from 'next/image'
import styles from './footer.module.scss'
import logoicon from '../images/logoicon.svg'
import logo from '../images/logo-3x.png'
import Link from 'next/link'
import facebookImg from '../images/facebook.png'
import twitterImg from '../images/twitter.png'
import instagramImg from '../images/instagram.png'
import youTubeImg from '../images/youtube.png'
import Navigation from './Navigation'

const Button = ({arrow, page}) => {
	return <>
		{page && <Link href={"/" + (page.slug === 'home-page' ? '' : page.slug)} passHref><div className={styles.button}>{parse(arrow)}</div></Link>}
	</>
}

const Footer = ({global, buttons}) => {
	// console.log("footer global ::", global)
	// console.log("footer buttons ::", buttons)
	return (
		<>
			<div className={styles.buttons}>
				<div className={styles.wrapper}>
					<Button arrow='&#60' page={buttons.previous} />
					<Button arrow='&#62' page={buttons.next} />
				</div>
			</div>
		
			<footer className={styles.root}>
				<div className={styles.wrapper}>
					<div className={styles.inner}>
						<div className={styles.left}>
							<div className={cx('grid-container', styles.gridContainer)}>
								<div className=''>
									<div className={styles.logo}>
										<Image
											alt=''
											src={logo}
											layout='responsive'
										/>
									</div>							
								</div>
								<div className=''>
									{/* <div className={styles.telephone}>
										<Link href={'tel:' + global.telephone}>{global.telephone}</Link>
									</div> */}
								</div>							
								<div className=''>
									{(global.facebook || global.twitter || global.instagram || global.youtube) && 
									<div className={styles.social}>
										{global.facebook && 
										<div className={cx(styles.ico)}>
											<div className={styles.facebook}>
												<a href={global.facebook} target="_blank" rel="noreferrer" >
													<Image
														alt=''
														src={facebookImg}
														layout='responsive'
													/>
												</a>
											</div>
										</div>}
										{global.twitter &&
										<div className={cx(styles.ico)}>
											<div className={styles.twitter}>
												<a href={global.twitter} target="_blank" rel="noreferrer" >
													<Image
														alt=''
														src={twitterImg}
														layout='responsive'
													/>
												</a>
											</div>
										</div>}
										{global.instagram && 
										<div className={cx(styles.ico)}>
											<div className={styles.instagram}>
												<a href={global.instagram} target="_blank" rel="noreferrer" >
													<Image
														alt=''
														src={instagramImg}
														layout='responsive'
													/>
												</a>
											</div>
										</div>}
										{global.youtube && 
										<div className={cx(styles.ico)}>
											<div className={styles.youtube}>
												<a href={global.youtube} target="_blank" rel="noreferrer" >
													<Image
														alt=''
														src={youTubeImg}
														layout='responsive'
													/>
												</a>
											</div>
										</div>}
									</div>}	
									<div className={styles.telephone}>
										<Link href={'tel:' + global.telephone}>{global.telephone}</Link>
									</div>					
								</div>
							</div> 
							<div className={cx(styles.copyRight, styles.desktop)}>
								{parse(global.copyRight)}
							</div>							
						</div>
						<div className={styles.right}>
							<div className={styles.navigation}>
								<Navigation
									isFooter={true}
									navigation={global.navigation}
									// navigationPicture={global.burgerNavigationPicture}
									// navigationLeft={global.burgerNavigationLeft}
									// navigationRightTop={global.burgerNavigationRightTop}
									// navigationRightBottom={global.burgerNavigationRightBottom}
								/>
							</div>
							{/* <div className={styles.address}>
								{parse(global.address)}
								<div className={styles.smallLogo}>
									<Image
										alt=''
										src={logoicon}
										layout='responsive'
									/>
								</div>
								-.-
							</div> */}
						</div>
						<div className={cx(styles.copyRight, styles.mobile)}>
							{parse(global.copyRight)}
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;