import { css } from '@emotion/react'
import React from 'react'

import Header from '@/components/molecules/Header'

export interface CommonLayoutProps {
  isLoggedIn: boolean
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ isLoggedIn, children }) => {
  return (
    <div
      css={css`
        width: 1024px;
        margin: 0 auto;
      `}>
      <Header isLoggedIn={isLoggedIn} />
      <main>{children}</main>
    </div>
  )
}

export default CommonLayout
