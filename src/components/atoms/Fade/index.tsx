import { css, useTheme } from '@emotion/react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export interface FadeProps {
  // renderButton: (setShowModal: Dispatch<SetStateAction<boolean>>) => void
  renderButton: (onToggleShowModal: () => void) => void
  renderModal: () => void
}

const Fade: React.FC<FadeProps> = ({ renderButton, renderModal }) => {
  const modalEl = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const [, setShow] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleToggleShowModal = useCallback(() => {
    setShowModal((prev) => !prev)
  }, [])

  const handleClickOutside = useCallback(
    (e: any) => {
      if (showModal && modalEl?.current?.contains(e.target) === false) {
        setShowModal(false)
      }
    },
    [showModal]
  )

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div
      ref={modalEl}
      css={css`
        position: relative;
        .alert-enter {
          opacity: 0;
          transform: scale(0.9);
        }
        .alert-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 300ms, transform 300ms;
        }
        .alert-exit {
          opacity: 1;
        }
        .alert-exit-active {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 300ms, transform 300ms;
        }
      `}>
      {renderButton(handleToggleShowModal)}
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShow(false)}
        onExited={() => setShow(true)}>
        <div
          css={css`
            position: absolute;
            right: 16px;
            background: #fff;
            padding: ${theme.space * 3}px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: ${theme.space * 3}px;
            width: 210px;
            border: 1px solid #eaeaea;
            border-radius: 4px;
          `}>
          <>{renderModal()}</>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Fade
