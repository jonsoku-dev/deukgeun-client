/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

type DropLinkItem = {
  text: string
  href: string
}

type DropButtonItem = {
  text: string
  onClick: any
}

export type DropListProps =
  | {
      type: 'link'
      list: DropLinkItem[]
    }
  | {
      type: 'button'
      list: DropButtonItem[]
    }

const DropList: React.FC<DropListProps> = ({ type, list }) => {
  return (
    <Container>
      {type === 'link'
        ? (list as DropLinkItem[]).map((item, idx) => (
            <li key={idx}>
              <Link href={item.href}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))
        : (list as DropButtonItem[]).map((item, idx) => (
            <li key={idx}>
              <button onClick={item.onClick}>
                <span>{item.text}</span>
              </button>
            </li>
          ))}
    </Container>
  )
}

const Container = styled.ul`
  li {
    text-transform: uppercase;
    text-align: start;
    &:hover {
      background: #eaeaea;
    }
  }
  a {
    display: block;
    padding: ${({ theme }) => theme.space * 2}px;
    text-decoration: none;
    color: black;
  }
`

export default DropList
