import Link from 'next/link'


import HeroImage from '../../public/hero-image.png'
import SubTitleIllustrationPng from '../../public/exp-illustration.png'

import { inter, poppins } from '../styles/fonts'

import {
  Container,
  Wrapper,
  Hero,
  HeroLeft,
  Title,
  SubTitle,
  Description,
  ButtonCalltoAction,
  ButtonDisclaimer,
  HeroRight,
  ImageHero,
  SubtitleWrapper,
  SubTitleIllustration,
  ButtonWrapper,
} from '../styles/index'
import HeaderSection from '@/components/HeaderSection'

export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <HeaderSection />
          <Hero>
            <HeroLeft>
              <Title className={inter.className}>
                Crie produtos digitais, marcas
              </Title>
              <SubtitleWrapper>
                <SubTitleIllustration src={SubTitleIllustrationPng} alt="purple circle with a pencil inside" width={42} height={42} />
                <SubTitle className={inter.className}>
                  experiências
                </SubTitle>
              </SubtitleWrapper>
              <Description className={poppins.className}>
                <strong>Desenvolvedor web</strong> e <strong>designer</strong>, especializado em Design Responsivo, UI/UX e JavaScript
              </Description>
              <ButtonWrapper>
                <ButtonCalltoAction href="" className={inter.className}>
                  Entre Em Contato
                </ButtonCalltoAction>
                <ButtonDisclaimer>
                  Descreva seu projeto • Orçamento rápido e fácil
                </ButtonDisclaimer>
              </ButtonWrapper>
            </HeroLeft>
            <HeroRight>
              <ImageHero src={HeroImage} alt="Hero image" width={525} height={315} />
            </HeroRight>
          </Hero>
        </Wrapper>
      </Container>
    </>
  )
}
