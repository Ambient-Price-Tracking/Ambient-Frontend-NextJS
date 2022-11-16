import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css';


function MyApp({ Component, pageProps }) {
  return <><Navbar/>
  <Component {...pageProps} /></>
}

export default MyApp
