import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useQueryClient } from 'react-query'

import CommonLayout from '@/components/organisms/CommonLayout'
import useMe from '@/shared/hooks/useMe'

export interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  const { meData, isLoggedIn } = useMe(false)
  const router = useRouter()
  const queryClient = useQueryClient()
  useEffect(() => {
    if (meData) {
      window.localStorage.removeItem('jwt')
      queryClient.removeQueries('me', { exact: true })
    }
    router.push('/')
  }, [meData])
  return <CommonLayout isLoggedIn={isLoggedIn}>Logout</CommonLayout>
}

export default Logout
