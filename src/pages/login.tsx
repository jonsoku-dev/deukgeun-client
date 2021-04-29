import { AxiosError } from 'axios'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { loginApi } from '@/shared/apis'

export interface LoginRequestDto {
  email: string
  password: string
}

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
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

  const LoginMutation = useMutation(
    async (loginRequestDto: LoginRequestDto) => {
      const res = await loginApi.loginPost(loginRequestDto)
      return res.data
    },
    {
      onSuccess: (data) => {
        console.log(data, 'success')
      },
      onError: (error: AxiosError) => {
        alert(error?.response?.data.msg)
      }
    }
  )

  const onSubmit = useCallback((loginRequestDto: LoginRequestDto) => {
    LoginMutation.mutate(loginRequestDto)
  }, [])

  console.log(errors)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
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
        </fieldset>

        <fieldset>
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
        </fieldset>
        <button onClick={() => reset()}>Reset</button>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
