import styled from 'styled-components'

interface CardPropTypes {
  color: string;
};

export const Card = styled.div<CardPropTypes>`
  background-color: white;
  width: 348px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 8px 15px #D5D5D5;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px ${ ({ color, theme }) => theme.colors.flavourProfiles[color] };
  }
`;

export const Actions = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: 16px;
  padding-bottom: 24px;
`;

export const CardsContainer = styled.div`
  width: calc(100% - 3rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

// export const Card = styled.div`
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   width: calc(100% / 4 - 2rem);
//   margin: 2rem;
//   box-shadow: 0px 8px 15px #D5D5D5;
//   transition: all 0.3s ease 0s;

//   &:hover {
//     transform: translateY(-7px);
//     box-shadow: 0px 15px 20px #21A0A066;
//   }
// `

export const CardImage = styled.div`
  width: 100%;
  padding: 1rem 1rem;
`;