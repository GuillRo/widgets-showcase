import Router from 'next/router'
import { useGlobal } from 'reactn'
import dynamic from 'next/dynamic'

const Home = () => {
  const [activetab] = useGlobal('activetab')
  Router.push(activetab)
  return null
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})
