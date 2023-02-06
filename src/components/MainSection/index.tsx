import CssIcon from '../../../public/icons/css-icon.webp'
import FigmaIcon from '../../../public/icons/figma-icon.webp'
import NodejsIcon from '../../../public/icons/nodejs-icon.webp'
import ReactIcon from '../../../public/icons/reactjs-icon.webp'
import TypescriptIcon from '../../../public/icons/typescript-icon.webp'


import { 
  MainContainer,
  MainTecnologies,
  MainTecnologiesText,
  MainTecnologiesList,
  MainTecnologiesItem,
  MainTecnologiesItemImage,
} from './styles'



export default function MainSection() {
  return (
    <MainContainer>
      <MainTecnologies>
        <MainTecnologiesText>
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
    </MainContainer>
  )
}