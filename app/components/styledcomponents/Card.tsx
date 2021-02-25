import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: calc(100% / 4 - 2rem);
  margin: 2rem;
  box-shadow: 0px 8px 15px #D5D5D5;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px #21A0A066;
  }
`

export const CardImage = styled.div`
  width: 100%;
  padding: 1rem 1rem;
`;