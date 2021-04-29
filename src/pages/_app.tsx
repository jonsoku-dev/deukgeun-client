import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

import { globalStyles } from '@/shared/styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
