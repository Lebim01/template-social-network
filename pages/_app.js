import '../styles/globals.css'
import '../styles/utils-classes.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
