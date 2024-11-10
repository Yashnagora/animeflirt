import '../styles/globals.css'
import '../styles/detail.css'
import '../styles/watch.css'
import '../styles/style.css'
import '../styles/test.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
