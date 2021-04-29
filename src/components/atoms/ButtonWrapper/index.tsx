import { css } from '@emotion/react'
import styled from '@emotion/styled'

export type ButtonWrapperProps = {
  gap?: number
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  justify-content: center;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
`

export default ButtonWrapper
