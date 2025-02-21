import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Layout } from '../../../components'
import { NextSeo } from 'next-seo'
import { SplashController } from '@sushiswap/ui/components/SplashController'
import { Address } from '@sushiswap/wagmi'

const Dashboard = dynamic(() => import('../../../components/Dashboard').then((mod) => mod.Dashboard), { ssr: false })

const UserDashboard = () => {
  const router = useRouter()
  const address = router.query.address as Address

  return (
    <SplashController>
      <NextSeo title="User" />
      <Layout>
        <Dashboard address={address} />
      </Layout>
    </SplashController>
  )
}

export default UserDashboard
