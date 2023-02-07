import {
  Container,
  Wrapper,

} from '../styles/index'
import HeaderSection from '@/components/HeaderSection'
import HeroSection from '@/components/HeroSection'
import MainSection from '@/components/MainSection'
import DifferentialsSection from '@/components/DifferentialsSection'
import RecentsJobs from '@/components/RecentsJobs'

export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <HeaderSection />
          <HeroSection />
          <MainSection />
          <DifferentialsSection />
          <RecentsJobs />
        </Wrapper>
      </Container>
    </>
  )
}
