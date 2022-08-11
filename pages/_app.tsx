import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../providers/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='bg-neutral-900 h-screen text-white p-7  max-w-7xl m-auto'>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>

  </div>
}

export default MyApp
