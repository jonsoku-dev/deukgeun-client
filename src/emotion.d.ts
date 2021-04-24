import '@emotion/react'

import { CustomTheme } from '@/shared/styles'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
