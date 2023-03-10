import {
  Container,
  Wrapper,

} from '../styles/index'
import HeaderSection from '@/components/HeaderSection'
import HeroSection from '@/components/HeroSection'
import MainSection from '@/components/MainSection'
import DifferentialsSection from '@/components/DifferentialsSection'
import { AboutMe } from '@/components/AboutMe'

export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <HeaderSection />
          <HeroSection />
          <MainSection />
          <DifferentialsSection />
          <AboutMe />
        </Wrapper>
      </Container>
    </>
  )
}
