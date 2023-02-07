import {
  DifferentialsContainer,
  DifferentialsWrapper,
  DifferentialContent,
  DifferentialImage,
  Title,
  Description,
} from './styles'

import { inter, poppins } from '@/styles/fonts'

import HighlightsIllustration from '../../../public/highlights-illustration.webp'
import SalesIllustration from '../../../public/sales-illustration.webp'
import OutboxIllustration from '../../../public/outbox-illustration.webp'


export default function DifferentialsSection() {
  return (
    <DifferentialsContainer>

      <DifferentialsWrapper>
        <DifferentialContent>
          <Title className={inter.className}>Obtenha um site que se destaque</Title>
          <Description className={poppins.className}>Desenvolvimento de sites personalizados e otimizados para SEO para garantir que seu site se destaque e atraia novos clientes. Entre em contato para discutir como alcançar seus objetivos on-line</Description>
        </DifferentialContent>
        <DifferentialImage src={HighlightsIllustration} alt="illustration of a man upper a stair" />
      </DifferentialsWrapper>

      <DifferentialsWrapper>
        <DifferentialImage src={SalesIllustration} alt="illustration of a man upper a stair" />
        <DifferentialContent>
          <Title className={inter.className}>Crie melhores experiências de usuário para seus clientes</Title>
          <Description className={poppins.className}>É fundamental criar uma melhor experiência para os usuários, através da criação de navegação intuitiva, estética atraente e apresentação clara e organizada do conteúdo, tornando as interações com o site mais agradáveis. Além disso, é importante construir confiança e credibilidade com os usuários, através de uma aparência profissional e consistente.</Description>
        </DifferentialContent>
      </DifferentialsWrapper>

      <DifferentialsWrapper>
        <DifferentialContent>
          <Title className={inter.className}>Transforme seu negócio com soluções fora da caixa</Title>
          <Description className={poppins.className}>Soluções fora da caixa podem ser a chave para fazer uma empresa se destacar no mercado altamente competitivo, criando novas oportunidades de negócios, atraindo mais clientes, aumentando a receita e diferenciando-a dos concorrentes, estabelecendo-a como líder no mercado</Description>
        </DifferentialContent>
        <DifferentialImage src={OutboxIllustration} alt="illustration of a man upper a stair" />
      </DifferentialsWrapper>

    </DifferentialsContainer>
  )
}