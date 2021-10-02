import styled from 'styled-components'

interface CardPropTypes {
  color: string;
};

export const Card = styled.div<CardPropTypes>`
  background-color: white;
  width: 348px;
  margin: 16px 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 8px 15px #D5D5D5;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 8px 15px ${ ({ color, theme }) => theme.colors.flavourProfiles[color] }};
  }
`;

export const Actions = styled.div`
  display: flex;
  padding: 16px;
  vertical-align: bottom;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;

export const CardsContainer = styled.div`
  width: calc(100% - 3rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardImage = styled.div`
  width: 100%;
  padding: 1rem 1rem;
`;