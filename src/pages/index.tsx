import MechanicalTypewriter from '@/components/MechanicalTypewriter'
import { Inter } from '@next/font/google'

const inter = Inter({
  variable: '--inter',
  subsets: ['latin']
})

import { Title } from '../styles/index'

export default function Home() {
  return (
    <>
      <main className={inter.className}>
        {/* <MechanicalTypewriter text='</> eriquy jhordan' /> */}
      </main>
    </>
  )
}
