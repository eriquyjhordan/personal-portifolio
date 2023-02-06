import { inter, poppins } from '@/styles/fonts'
import CssIcon from '../../../public/icons/css-icon.webp'
import FigmaIcon from '../../../public/icons/figma-icon.webp'
import NodejsIcon from '../../../public/icons/nodejs-icon.webp'
import ReactIcon from '../../../public/icons/reactjs-icon.webp'
import TypescriptIcon from '../../../public/icons/typescript-icon.webp'

import MainImage from '../../../public/dashboard-illustration.webp'

import { 
  MainContainer,
  MainTecnologies,
  MainTecnologiesText,
  MainTecnologiesList,
  MainTecnologiesItem,
  MainTecnologiesItemImage,
  MainCenterTextWrapper,
  MainCenterImage,
  MainCenterText,
  MainCenterTextTitle,
  MainCenterTextDescription
} from './styles'



export default function MainSection() {
  return (
    <MainContainer>
      <MainTecnologies>
        <MainTecnologiesText className={poppins.className}>
          Principais Tecnologias • Desenvolvimento ágio e moderno
        </MainTecnologiesText>
        <MainTecnologiesList>
          <MainTecnologiesItem>
            <MainTecnologiesItemImage src={ReactIcon} alt="ReactJS" />
          </MainTecnologiesItem>
          <MainTecnologiesItem>
            <MainTecnologiesItemImage src={FigmaIcon} alt="Figma" />
          </MainTecnologiesItem>
          <MainTecnologiesItem>
            <MainTecnologiesItemImage src={TypescriptIcon} alt="Typescript" />
          </MainTecnologiesItem>
          <MainTecnologiesItem>
            <MainTecnologiesItemImage src={NodejsIcon} alt="NodeJS" />
          </MainTecnologiesItem>
          <MainTecnologiesItem>
            <MainTecnologiesItemImage src={CssIcon} alt="CSS" />
          </MainTecnologiesItem>
        </MainTecnologiesList>
      </MainTecnologies>
      <MainCenterTextWrapper>
        <MainCenterImage src={MainImage} alt="Main Image" />
        <MainCenterText>
          <MainCenterTextTitle className={inter.className}>
            Transforme seu site em um ímã de clientes
          </MainCenterTextTitle>
          <MainCenterTextDescription className={poppins.className}>
             Um site bem-feito e de fácil navegação pode ajudar a aumentar a confiança dos clientes em sua marca e fornecer-lhes com as informações que eles precisam para tomar uma decisão de compra
          </MainCenterTextDescription>
        </MainCenterText>
      </MainCenterTextWrapper>
    </MainContainer>
  )
}