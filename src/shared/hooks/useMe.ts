import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import { userApi } from '@/shared/apis'

const useMe = (redirect: boolean) => {
  const router = useRouter()
  const { data: meData, error: meError, isLoading: meLoading } = useQuery(
    'me',
    async () => {
      const res = await userApi.getMe({
        headers: {
          authorization: `Bearer ${window.localStorage.getItem('jwt')}`
        }
      })
      return res.data
    },
    {
      retry: false
    }
  )

  useEffect(() => {
    if (meData && !meLoading && redirect) {
      router.push('/')
    }
  }, [meData, meLoading, redirect])

  return {
    meData,
    meError,
    meLoading,
    isLoggedIn: !!meData && !meLoading && !meError
  }
}

export default useMe
