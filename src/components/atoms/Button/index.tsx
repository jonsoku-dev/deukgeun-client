/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

export type ButtonProps = {
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  /** 버튼의 생김새를 설정합니다. */
  theme?: 'primary' | 'secondary' | 'tertiary'
  /** 버튼의 크기를 설정합니다 */
  size?: 'small' | 'medium' | 'big'
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number
  /** 버튼 안의 내용 */
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button: React.FC<ButtonProps> = ({ onClick, theme = 'primary', size = 'medium', width, disabled, children }) => {
  return (
    <button css={[style, themes[theme], sizes[size], { width }]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

const style = css`
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`

const themes = {
  primary: css`
    background: #20c997;
    color: white;
    &:hover:enabled {
      background: #38d9a9;
    }
    &:active:enabled {
      background: #12b886;
    }
    &:disabled {
      background: #aed9cc;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    &:hover:enabled {
      background: #e6fcf5;
    }
    &:active:enabled {
      background: #c3fae8;
    }
    &:disabled {
      color: #bcd9d0;
    }
  `
}

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 1rem;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.4rem;
  `,
  big: css`
    font-size: 1.6rem;
    padding: 1.6rem;
  `
}

export default Button
