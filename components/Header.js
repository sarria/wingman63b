import Head from 'next/head'

const Header = ({seo}) => {
	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.metaDesc} />
				<meta name="keywords" content={seo.metaKeywords} />
			</Head>
		</>
	)
}

export default Header;