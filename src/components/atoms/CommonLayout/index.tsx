import { css } from '@emotion/react'
import React from 'react'

export interface CommonLayoutProps {}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div
      css={css`
        background: aliceblue;
      `}>
      {children}
    </div>
  )
}

export default CommonLayout
