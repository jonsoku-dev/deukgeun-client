import { ThemeProvider } from '@emotion/react'
import { emotionTheme, globalStyles } from '../src/shared/styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const Provider = (Story, context) => {
  return (
      <ThemeProvider theme={emotionTheme}>
        {globalStyles}
        <Story {...context} />
      </ThemeProvider>
  )
}

export const decorators = [Provider]