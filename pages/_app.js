import '../styles/globals.css'
import '../styles/detail.css'
import '../styles/watch.css'
import '../styles/style.css'
import '../styles/test.css'
import '../styles/trending.css'
import '../styles/Footer.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

   const [hydrated, setHydrated] = useState(false);
  
    useEffect(() => {
      setHydrated(true); 
    }, []);
    
    if (!hydrated) {
      return null;
    }
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
