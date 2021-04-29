import styled from '@emotion/styled'
import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

export type TextFieldProps = {
  type?: 'email' | 'text' | 'password'
  label: string
} & UseControllerProps

const TextField: React.FC<TextFieldProps> = ({ type = 'text', label, ...props }) => {
  const { field, fieldState } = useController(props)
  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        <input {...field} type={type} placeholder={`${label} 항목을 입력해주세요. `} />
        {fieldState.error?.message && <p>{fieldState.error.message}</p>}
      </InputWrapper>
    </Container>
  )
}

const Container = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space}px;
`

const Label = styled.h6`
  font-size: 1.6rem;
  font-weight: 600;
  position: relative;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space * 2}px;

  > input {
    width: 100%;
    padding: ${(props) => props.theme.space * 2}px;
    outline: none;
    border: 1px solid #c6c6c6;
    font-size: 1.4rem;
  }

  > p {
    color: red;
    margin-left: ${(props) => props.theme.space * 2}px;
    font-size: 1.2rem;
  }
`

export default TextField
