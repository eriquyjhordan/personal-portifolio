import { inter, poppins } from "@/styles/fonts";
import {
  Container,
  MyPhoto,
  AboutMeContent,
  Title,
  TitleAboveImage,
  DescriptionContainer,
  Description,
} from "./styles";

import EriquyPhoto from "../../../public/images/eriquy-jhordan.webp"

export function AboutMe() {
  return (
    <Container>
      <TitleAboveImage className={inter.className}>Desenvolvedor FullStack</TitleAboveImage>
      <MyPhoto src={EriquyPhoto} alt="Eriquy Jhordan profile image" />
      <AboutMeContent>
        <Title className={inter.className}>Desenvolvedor FullStack</Title>
        <DescriptionContainer className={poppins.className}>
          <Description>Olá, sou um desenvolvedor web com ampla experiência em desenvolvimento ágil e preceitos do Scrum. Tive a oportunidade de adquirir minha primeira experiência formal de desenvolvimento de aplicações web na Ford, onde atuei como desenvolvedor frontend. Meu papel principal na equipe era transformar o design em telas interativas e ricas em experiência do usuário.</Description>
          <Description>Durante minha carreira, tive a oportunidade de trabalhar com várias tecnologias frontend, incluindo ReactJs, AngularJs, Git, Styled-Components, CSS e SEO. Além disso, tenho experiência em desenvolvimento backend, usando NodeJs e trabalhando com bancos de dados relacionais e não relacionais.</Description>
        </DescriptionContainer>
      </AboutMeContent>
    </Container>
  );
}