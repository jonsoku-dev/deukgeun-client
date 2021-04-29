import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

const dummyAvatar = 'https://yt3.ggpht.com/yti/ANoDKi7TmmkTRdl2CISDk2lErk0aMo1xv3hp-XqUqQ=s88-c-k-c0x00ffffff-no-rj-mo'

export interface HeaderProps {
  isLoggedIn: boolean
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  console.log(isLoggedIn)
  return (
    <Container>
      <Start.Wrapper>
        <img src="/logo.svg" alt="logo" />
      </Start.Wrapper>
      <Center.Wrapper>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/logout">
          <a>Logout</a>
        </Link>
      </Center.Wrapper>
      <End.Wrapper>
        {isLoggedIn ? (
          <End.Avatar>
            <img src={dummyAvatar} alt="avatar" />
          </End.Avatar>
        ) : (
          <End.Avatar>
            <img src={'/icon/svg/guest.svg'} alt="avatar" />
          </End.Avatar>
        )}
      </End.Wrapper>
    </Container>
  )
}

const Container = styled.header`
  background: rgba(142, 142, 142, 0.43);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Start = {
  Wrapper: styled.div`
    width: 48px;
    height: 48px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `
}

const Center = {
  Wrapper: styled.div`
    display: flex;
    gap: 16px;
    a {
      font-size: 1.6rem;
    }
  `
}

const End = {
  Wrapper: styled.div`
    display: flex;
    gap: 16px;
    a {
      font-size: 1.6rem;
    }
  `,
  Avatar: styled.div`
    background: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `
}

export default Header
