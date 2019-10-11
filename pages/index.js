import Router from 'next/router'
import { useGlobal } from 'reactn'
import dynamic from 'next/dynamic'

const Home = () => {
  const [global] = useGlobal('activetab')
  Router.push(global.activetab)
  return null
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})
