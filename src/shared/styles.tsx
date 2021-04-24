import { css, Global } from '@emotion/react'

export const emotionTheme = {
  space: 8
}

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 62.5%;
      }
    `}
  />
)

export type CustomTheme = typeof emotionTheme
