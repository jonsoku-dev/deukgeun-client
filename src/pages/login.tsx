import { AxiosError } from 'axios'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import Button from '@/components/atoms/Button'
import ButtonWrapper from '@/components/atoms/ButtonWrapper'
import Form from '@/components/atoms/Form'
import TextField from '@/components/atoms/TextField'
import CommonLayout from '@/components/organisms/CommonLayout'
import { loginApi } from '@/shared/apis'
import useMe from '@/shared/hooks/useMe'
import * as t from '@/shared/texts'

export interface LoginRequestDto {
  email: string
  password: string
}

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const { isLoggedIn, meLoading } = useMe(true)

  const queryClient = useQueryClient()

  const LoginMutation = useMutation(
    async (loginRequestDto: LoginRequestDto) => {
      const res = await loginApi.loginPost(loginRequestDto)
      const token = res.headers.authorization.replace('Bearer ', '')
      window.localStorage.setItem('jwt', token)
      return res.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('me')
      },
      onError: (error: AxiosError) => {
        if (error?.response?.data?.message === 'Unauthorized') return alert(t.UNAUTHORIZED_ERROR)
      }
    }
  )

  const { handleSubmit, reset, control } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  })

  const onSubmit = useCallback((loginRequestDto: LoginRequestDto) => {
    LoginMutation.mutate(loginRequestDto)
  }, [])

  if (meLoading) {
    return <div>Loading ...</div>
  }

  return (
    <CommonLayout isLoggedIn={isLoggedIn}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          label={t.LABEL_EMAIL}
          name={'email'}
          control={control}
          rules={{ required: { value: true, message: t.REQUIRED_EMAIL } }}
        />
        <TextField
          type="password"
          label={t.LABEL_PASSWORD}
          name={'password'}
          control={control}
          rules={{ required: { value: true, message: t.REQUIRED_PASSWORD } }}
        />
        <ButtonWrapper gap={8}>
          <Button onClick={() => reset()}>Reset</Button>
          <Button type="submit">Login</Button>
        </ButtonWrapper>
      </Form>
    </CommonLayout>
  )
}

export default LoginPage
