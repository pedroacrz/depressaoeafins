import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../providers/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </div>
}

export default MyApp
