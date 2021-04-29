import { AxiosError } from 'axios'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import CommonLayout from '@/components/organisms/CommonLayout'
import { indexApi } from '@/shared/apis'
import useMe from '@/shared/hooks/useMe'

import { SignupRequestDto } from '../__generated__/typescript-axios'

export interface SignupPageProps {}

const SignupPage: React.FC<SignupPageProps> = () => {
  const { meLoading, isLoggedIn } = useMe(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SignupRequestDto>({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  // Mutations
  const SignupMutation = useMutation(
    async (signupRequestDto: SignupRequestDto) => {
      const res = await indexApi.signUp(signupRequestDto)
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

  const onSubmit = useCallback((signupRequestDto: SignupRequestDto) => {
    SignupMutation.mutate(signupRequestDto)
  }, [])

  if (meLoading) {
    return <div>Loading ...</div>
  }

  return (
    <CommonLayout isLoggedIn={isLoggedIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="signup-username">Username</label>
          <input
            type="username"
            id="signup-username"
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required'
              }
            })}
          />
          {errors?.username?.message && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            id="signup-email"
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
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
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
        <button type="submit">Signup</button>
      </form>
    </CommonLayout>
  )
}

export default SignupPage
