import Logo from '../../../public/eriquyjhordan.svg'
import GitHub from '../../../public/icons/github.webp'
import LinkedIn from '../../../public/icons/linkedin.webp'
import Mail from '../../../public/icons/mail.webp'
import HamburguerMenu from '../../../public/icons/hamburguer-menu.webp'

import { inter } from '../../styles/fonts'

import {
  Header,
  NavWrapper,
  Nav,
  IconsWrapper,
  Icon,
  HamburguerIcon,
  LogoWrapper,
} from './styles'
import Link from 'next/link'

export default function HeaderSection() {
  return (
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
        <Link href="mailto: eriquy@gmail.com">
          <Icon src={Mail} alt="Mail icon and link" width={24} height={24} />
        </Link>
      </IconsWrapper>
      <HamburguerIcon src={HamburguerMenu} alt="Hamburguer menu icon" width={32} height={32} />
    </Header>
  )
}