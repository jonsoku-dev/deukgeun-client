import Link from 'next/link'
import React from 'react'
import { Control } from 'react-hook-form'

import Button from '@/components/atoms/Button'
import Form from '@/components/atoms/Form'
import TextField from '@/components/atoms/TextField'
import CommonLayout from '@/components/organisms/CommonLayout'
import * as t from '@/shared/texts'

export interface SignupTemplateProps {
  isLoggedIn: boolean
  control: Control
  handleSubmit: any
}

const SignupTemplate: React.VFC<SignupTemplateProps> = ({ isLoggedIn, control, handleSubmit }) => {
  return (
    <CommonLayout isLoggedIn={isLoggedIn}>
      <Form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label={t.LABEL_USERNAME}
          name={'username'}
          control={control}
          rules={{ required: { value: true, message: t.REQUIRED_USERNAME } }}
        />
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
        <Button type="submit">Signup</Button>
        <Link href="/login">
          <a>{t.LOGIN_LINK_MESSAGE}</a>
        </Link>
      </Form>
    </CommonLayout>
  )
}

export default SignupTemplate
