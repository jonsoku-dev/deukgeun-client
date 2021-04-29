import { AxiosError } from 'axios'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { indexApi } from '@/shared/apis'
import useMe from '@/shared/hooks/useMe'

import { SignupRequestDto } from '../__generated__/typescript-axios'
import SignupTemplate from '../components/templates/SignupTemplate'

const defaultValues = {
  username: '',
  email: '',
  password: ''
}

export interface SignupPageProps {}

const SignupPage: React.FC<SignupPageProps> = () => {
  const { meLoading, isLoggedIn } = useMe(true)

  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues
  })

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

  return <SignupTemplate isLoggedIn={isLoggedIn} control={control} handleSubmit={handleSubmit(onSubmit)} />
}

export default SignupPage
