import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

export interface HeaderProps {
  isLoggedIn: boolean
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src="/logo.svg" alt="logo" />
      </ImageWrapper>
      <MenuWrapper>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a>Signup</a>
              </Link>
            </li>
          </>
        )}
      </MenuWrapper>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`
const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const MenuWrapper = styled.ul`
  display: flex;
  gap: 16px;
  a {
    font-size: 1.6rem;
  }
`

export default Header
