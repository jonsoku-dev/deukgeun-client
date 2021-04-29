import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'

import DropList from '@/components/atoms/DropList'
import Fade from '@/components/atoms/Fade'

import Logo from '../../../../public/logo.svg'

const dummyAvatar = 'https://yt3.ggpht.com/yti/ANoDKi7TmmkTRdl2CISDk2lErk0aMo1xv3hp-XqUqQ=s88-c-k-c0x00ffffff-no-rj-mo'

export interface HeaderProps {
  isLoggedIn: boolean
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const router = useRouter()
  const list = useMemo(() => {
    if (isLoggedIn) {
      return [{ text: 'Logout', href: '/logout' }]
    } else {
      return [
        { text: 'Login', href: '/login' },
        { text: 'Signup', href: '/signup' }
      ]
    }
  }, [isLoggedIn])
  return (
    <Container>
      <Start.Wrapper>
        <Logo fill="#000" height="64px" width="64px" viewBox="0 0 26 26" onClick={() => router.push('/')} />
      </Start.Wrapper>
      <Center.Wrapper>i&apos;m center</Center.Wrapper>
      <End.Wrapper>
        <Fade
          renderButton={(onToggleShowModal) => (
            <End.Avatar onClick={onToggleShowModal}>
              <img src={isLoggedIn ? dummyAvatar : '/icon/svg/guest.svg'} alt="avatar" />
            </End.Avatar>
          )}
          renderModal={() => {
            return <DropList type={'link'} list={list} />
          }}
        />
      </End.Wrapper>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Start = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      cursor: pointer;
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
    cursor: pointer;
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
