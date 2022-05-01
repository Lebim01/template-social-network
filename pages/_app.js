import '../styles/globals.css'
import '../styles/utils-classes.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen mx-auto max-w-xl'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
