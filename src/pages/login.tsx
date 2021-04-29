import { AxiosError } from 'axios'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginRequestDto>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = useCallback((loginRequestDto: LoginRequestDto) => {
    LoginMutation.mutate(loginRequestDto)
  }, [])

  if (meLoading) {
    return <div>Loading ...</div>
  }

  return (
    <CommonLayout isLoggedIn={isLoggedIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required'
              }
            })}
          />
          {errors?.email?.message && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required'
              }
            })}
          />
          {errors?.password?.message && <p>{errors.password.message}</p>}
        </div>
        <button onClick={() => reset()}>Reset</button>
        <button type="submit">Login</button>
      </form>
    </CommonLayout>
  )
}

export default LoginPage
