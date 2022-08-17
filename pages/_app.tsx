import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../providers/AuthContext'
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </div>
}

export default MyApp
