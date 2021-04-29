import CommonLayout from '@/components/organisms/CommonLayout'
import useMe from '@/shared/hooks/useMe'

const IndexPage = () => {
  const { isLoggedIn } = useMe(false)
  return (
    <CommonLayout isLoggedIn={isLoggedIn}>
      <h1>안녕하세요.</h1>
    </CommonLayout>
  )
}
export default IndexPage
