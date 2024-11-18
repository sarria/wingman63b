import { ReactElement } from 'react';
import Image from 'next/image'
import styles from './styles/hero.module.scss'

function Hero({ title, mobileHeaderImage, desktopHeaderImage }) {
	return (
		<div className={styles.root}>
			<div className={styles.desktop}>
				<div className={styles.background}>
					<div className={styles.left}></div>
					<div className={styles.right}></div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.center}>
						<div className={styles.desktopHeaderImage}>
							{desktopHeaderImage && 
								<Image
									alt={desktopHeaderImage.altText}
									src={desktopHeaderImage.sourceUrl}
									layout="fill"
									objectFit="cover"
									objectPosition="left center"
								/>
							}
						</div>
						<div className={styles.title}>
							<div className={styles.titleWrapper}>
								{title}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.mobile}>
				<div className={styles.title}>
					<div className={styles.titleWrapper}>
						{title}
					</div>
				</div>
				<div className={styles.mobileHeaderImage}>
					{mobileHeaderImage && 
						<Image
							alt={mobileHeaderImage.altText}
							src={mobileHeaderImage.sourceUrl}
							layout='responsive'
							width={mobileHeaderImage.mediaDetails.width}
							height={mobileHeaderImage.mediaDetails.height}
							// layout="fill"
							// objectFit="cover"
							// objectPosition="bottom center"
						/>
					}
				</div>
			</div>
		</div>
	)
}

export default Hero