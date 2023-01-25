import MechanicalTypewriter from '@/components/MechanicalTypewriter'
import { Inter } from '@next/font/google'

import Logo from '../../public/eriquy-jhordan-logo.svg'

const inter = Inter({
  variable: '--inter',
  subsets: ['latin']
})

import { Title } from '../styles/index'

export default function Home() {
  return (
    <>
      <main className={inter.className}>
      </main>
    </>
  )
}
