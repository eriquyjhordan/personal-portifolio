import {
  Container,
  FooterWrapper,
  Header,
  Title,
  FooterContent,
  FooterPresentation,
  Description,
  FooterLinks,
  FooterLink,
  FooterLinkTitle,
  FooterRights,
  CopyRights,
  SocialLinks,
  SocialLink,
  Icon,
} from './styles';

import Logo from '../../../public/eriquyjhordan.svg'
import GithubIcon from '../../../public/icons/github.webp';
import MailIcon from '../../../public/icons/mail.webp';
import LinkedinIcon from '../../../public/icons/linkedin.webp';
import { inter, poppins } from '@/styles/fonts';
import { ButtonCalltoAction } from '../HeroSection/styles';
import { LogoWrapper } from '../HeaderSection/styles';

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <Header>
          <Title className={inter.className}>Coloque sua empresa Online hoje!</Title>
          <ButtonCalltoAction className={inter.className} href="/">Entre em contato</ButtonCalltoAction>
        </Header>
        <FooterContent>
          <FooterPresentation>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <Description className={poppins.className}>
              Sou uma pessoa proativa e sempre buscando soluções criativas para os desafios enfrentados. Estou animado para aplicar minhas habilidades e conhecimentos em novos projetos.
            </Description>
          </FooterPresentation>
          <FooterLinks className={inter.className}>
            <FooterLink >
              <FooterLinkTitle href="/">Início</FooterLinkTitle>
            </FooterLink>
            <FooterLink >
              <FooterLinkTitle href="/">Sobre</FooterLinkTitle>
            </FooterLink>
            <FooterLink>
              <FooterLinkTitle href="/">Perguntas frequentes</FooterLinkTitle>
            </FooterLink>
            <FooterLink>
              <FooterLinkTitle href="/">Testemunhos</FooterLinkTitle>
            </FooterLink>
          </FooterLinks>
          <FooterLinks className={inter.className}>
            <FooterLink >
              <FooterLink>
                <FooterLinkTitle href="/">Trabalhos recentes</FooterLinkTitle>
              </FooterLink>
              <FooterLink>
                <FooterLinkTitle href="/">Contato</FooterLinkTitle>
              </FooterLink>
            </FooterLink>
          </FooterLinks>
        </FooterContent>
        <FooterRights>
          <CopyRights className={inter.className}>&copy; 2023 todos os direitos reservados</CopyRights>
          <SocialLinks>
            <SocialLink href="/">
              <Icon src={GithubIcon} alt="github icon" />
            </SocialLink>
            <SocialLink href="/">
              <Icon src={MailIcon} alt="mail icon" />
            </SocialLink>
            <SocialLink href="/">
              <Icon src={LinkedinIcon} alt="linkedin icon" />
            </SocialLink>
          </SocialLinks>
        </FooterRights>
      </FooterWrapper>
    </Container>
  );
}