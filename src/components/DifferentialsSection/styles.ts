import Image from "next/image";
import styled from "styled-components";

export const DifferentialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6.4rem auto;
  width: 100%;
  @media (max-width: 790px) {
    & > div:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

export const DifferentialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 6.4rem;
  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const DifferentialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 49.1rem;
`;
export const DifferentialImage = styled(Image)`
  @media (max-width: 790px) {
    width: 30rem;
    height: auto;
    margin-top: 4rem;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.9rem;
  color: #0f1221;
  @media (max-width: 790px) {
    text-align: center;
  }
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #495057;
  margin-top: 2.4rem;
  @media (max-width: 790px) {
    text-align: center;
  }
`;
