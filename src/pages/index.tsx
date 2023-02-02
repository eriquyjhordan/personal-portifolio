import {
  Container,
  Wrapper,
  
} from '../styles/index'
import HeaderSection from '@/components/HeaderSection'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <HeaderSection />
          <HeroSection />
        </Wrapper>
      </Container>
    </>
  )
}
