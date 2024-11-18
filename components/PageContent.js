import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './styles/pageContent.module.scss'
import cx from 'classnames'
import Header from './Header'
import Footer from './Footer'
import Logo from './Logo'
import Navigation from './Navigation'
import Hero from './Hero'
import Text from './Text'
import Label from './Label'
import Video from './Video'
import Thumbnails from './Thumbnails'
import Bios from './Bios'
import Carousel from './Carousel'
import Burger from './Burger'
import Article from './Article'
import Images from './Images'
import Quotes from './Quotes'
import ImageSlider from './ImageSlider'
import Contact from './Contact'

function PageContent({page, global}) {
	const router = useRouter()
	// console.log("page ::", page)

	useEffect(() => {
		// ALL THIS JUST TO BE ABLE TO JUMP TO A HASH IN A PAGE. WOW
		const handleRouteChange = (url, { shallow }) => {
			// console.log(
			// 	`Page changed to ${url} ${
			// 		shallow ? 'with' : 'without'
			// 	} shallow routing`
			// )
		  	if (location.hash) {
				// location = location
				const hash = location.hash.substring(1).replaceAll('%20', ' ')
				const ele = document.getElementById(hash)
				if (ele) window.scrollTo(0, ele.offsetTop + 350)
			}		  
		}
	
		router.events.on('routeChangeComplete', handleRouteChange)
	
		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
		  router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [])	

	const isHomePage = page.slug === 'home-page';

	return page ? (
		<div className={cx({[styles.homePage]: isHomePage}, {[styles.innerPage]: !isHomePage})} id='pageContent'>
			<Header seo={page.seo} />

			<Navigation
				navigationPicture={global.burgerNavigationPicture}
				navigationLeft={global.burgerNavigationLeft}
				navigationRightTop={global.burgerNavigationRightTop}
				navigationRightBottom={global.burgerNavigationRightBottom}
			/>
			<Logo isHomePage={isHomePage} />
			<Burger />
			{isHomePage  && <Carousel carousel={page.homePage.carousel} />}
			{!isHomePage && <Hero title={page.title} mobileHeaderImage={page.content_blocks.mobileHeaderImage} desktopHeaderImage={page.content_blocks.desktopHeaderImage} />}
			
			{page.content_blocks.modules && page.content_blocks.modules.map((module, idx) => {
				let ele = <>{module.moduleType}</>
				let prevModuleType = idx > 0 ? page.content_blocks.modules[idx-1].moduleType : '';
				let nextModuleType = idx < page.content_blocks.modules.length-1 ? page.content_blocks.modules[idx+1].moduleType : '';
				
				switch(module.moduleType) {
					case 'text':
						ele = <Text data={module} />
						break;
					case 'label':
						ele = <Label data={module} />
						break;
					case 'video':
						ele = <Video data={module} />
						break;
					case 'thumbnails':
						ele = <Thumbnails data={module} />
						break;
					case 'bios':
						ele = <Bios data={module} />
						break;
					case 'article':
						ele = <Article data={module} />
						break;
					case 'images':
						ele = <Images data={{...module, prevModuleType, nextModuleType}} />
						break;
					case 'quotes':
						ele = <Quotes data={module} />
						break;
					case 'slider':
						ele = <ImageSlider data={module} />
						break;
					case 'contact':
						ele = <Contact data={module} />
						break;
					default:
						// code block
				}
		
				return (
					<div key={idx}>
						{ele}
					</div>
				)
			})}

			<Footer 
				global={global} buttons={page.buttons}
			/>
		</div>		
	) : <></>
}

export default PageContent