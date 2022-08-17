import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../providers/AuthContext'
import { useEffect } from 'react'
import 'react-quill/dist/quill.snow.css'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const routerUse = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    routerUse.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      routerUse.events.off("routeChangeComplete", handleRouteChange)
    };
  }, [routerUse.events]);

  return <div>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </div>
}

export default MyApp
