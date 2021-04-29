import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import LoginTemplate from '@/components/templates/LoginTemplate'
import { loginApi } from '@/shared/apis'
import useMe from '@/shared/hooks/useMe'
import * as t from '@/shared/texts'
import { LoginRequestDto } from '@/shared/types'

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const { isLoggedIn, meLoading } = useMe(true)
  const router = useRouter()

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
        router.push('/')
      },
      onError: (error: AxiosError) => {
        if (error?.response?.data?.message === 'Unauthorized') return alert(t.UNAUTHORIZED_ERROR)
      }
    }
  )

  const { handleSubmit, control } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  })

  const onSubmit = useCallback((loginRequestDto: LoginRequestDto) => {
    LoginMutation.mutate(loginRequestDto)
  }, [])

  if (meLoading) {
    return <div>Loading ...</div>
  }

  return <LoginTemplate isLoggedIn={isLoggedIn} control={control} handleSubmit={handleSubmit(onSubmit)} />
}

export default LoginPage
