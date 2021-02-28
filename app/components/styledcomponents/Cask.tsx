import styled from 'styled-components';

interface CaskListItemFlavourPropTypes {
  flavourProfile?: string;
}

interface FlavourStrip extends CaskListItemFlavourPropTypes {};

export const CaskList = styled.div`
  margin: 0 2rem;
`

export const CaskListItemDiv = styled.div<CaskListItemFlavourPropTypes>`
  box-shadow: 0px 8px 15px #D5D5D5;
  width: 25vw;
  background: white;
  margin: 0.5rem 0;
  transition: all 0.3s ease 0s;

  &:hover {
  box-shadow: 0px 4px 4px ${ props => `${ props.flavourProfile }` };
  }
`;

export const CaskListItemButton = styled.div<CaskListItemFlavourPropTypes>`
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    transform: translateX(15px);
  }
`;

export const CaskListItemFlavourPill = styled.div<CaskListItemFlavourPropTypes>`
  background: ${ props => props.flavourProfile };
  padding: 35px 10px;
`

export const ActiveCaskHeader = styled.div<FlavourStrip>`
  background ${ props => props.flavourProfile };
  width: 300px;
  padding: 1rem 0;
`

export const FlavourStrip = styled.div<FlavourStrip>`
  background: ${ props => props.flavourProfile };
  padding: 0.5rem 0rem;
  color: white;
  margin: 1rem 0 0;
`

export const ImageContainer = styled.div`
  width: 250px;
  height: 400px;
`