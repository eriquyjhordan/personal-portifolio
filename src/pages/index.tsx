import { Inter } from '@next/font/google'
import Link from 'next/link'

import Logo from '../../public/eriquyjhordan.svg'
import GitHub from '../../public/icons/github.png'
import LinkedIn from '../../public/icons/linkedin.png'
import Mail from '../../public/icons/mail.png'

const inter = Inter({
  variable: '--inter',
  subsets: ['latin']
})

import { Container, Wrapper, Header, NavWrapper, Nav, IconsWrapper, Icon, Circle } from '../styles/index'

export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <Circle />
          <div className={inter.className}>
            <Header >
              <Logo width={300} />
              <NavWrapper>
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
            </Header>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}
