import '../styles/globals.css'
import '../styles/burger.scss'
import UnderConstruction from '../components/UnderConstruction'

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_SITE_ACTIVE !== 'true') {
    return <UnderConstruction />
  }
  return <Component {...pageProps} />
}

export default MyApp
