import { Inter, Poppins } from '@next/font/google'
import Link from 'next/link'

import Logo from '../../public/eriquyjhordan.svg'
import GitHub from '../../public/icons/github.png'
import LinkedIn from '../../public/icons/linkedin.png'
import Mail from '../../public/icons/mail.png'
import HamburguerMenu from '../../public/icons/hamburguer-menu.png'
import HeroImage from '../../public/hero-image.png'
import SubTitleIllustrationPng from '../../public/exp-illustration.png'

const inter = Inter({
  variable: '--inter',
  subsets: ['latin']
});

const poppins = Poppins({
  variable: '--poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});



import {
  Container,
  Wrapper,
  Header,
  NavWrapper,
  Nav,
  IconsWrapper,
  Icon,
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
  HamburguerIcon,
  LogoWrapper,
} from '../styles/index'

export default function Home() {
  const logoStyle = {
    fontSize: '6rem',
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Header >
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <NavWrapper className={inter.className}>
              <Nav href="/">Início</Nav>
              <Nav href="/">Sobre</Nav>
              <Nav href="/">Projetos</Nav>
              <Nav href="/">Contatos</Nav>
            </NavWrapper>
            <IconsWrapper>
              <Link href="https://www.github.com/eriquyjhordan" target="_blank">
                <Icon src={GitHub} alt="github icon and link" width={24} height={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/eriquyjhordan" target="_blank">
                <Icon src={LinkedIn} alt="Linkedin icon and link" width={24} height={24} />
              </Link>
              <Link href="">
                <Icon src={Mail} alt="Mail icon and link" width={24} height={24} />
              </Link>
            </IconsWrapper>
            <HamburguerIcon src={HamburguerMenu} alt="Hamburguer menu icon" width={32} height={32} />
          </Header>
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
