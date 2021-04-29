import styled from '@emotion/styled'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border: 1px solid #eaeaea;
  padding: ${({ theme }) => theme.space * 10}px;
  -webkit-box-shadow: 6px 6px 13px -6px rgba(0, 0, 0, 0.4);
  box-shadow: 6px 6px 13px -6px rgba(0, 0, 0, 0.4);
`

export default Form
