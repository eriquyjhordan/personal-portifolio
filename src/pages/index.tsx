import { Inter } from '@next/font/google'

// import Logo from '../../public/eriquy-jhordan-logo.svg'

const inter = Inter({
  variable: '--inter',
  subsets: ['latin']
})

import { Header, LogoWrapper } from '../styles/index'

export default function Home() {
  return (
    <>
      <div className={inter.className}>
        <Header >
        </Header>

      </div>
    </>
  )
}
