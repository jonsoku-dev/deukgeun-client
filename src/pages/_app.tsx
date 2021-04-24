import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'

import { globalStyles } from '@/shared/styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
