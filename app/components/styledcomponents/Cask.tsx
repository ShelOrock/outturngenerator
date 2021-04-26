import styled from 'styled-components';

interface FlavourPillPropTypes {
  flavourProfile?: string;
  width?: string;
}

export const List = styled.div`
  margin: 0 2rem;
`

export const ListItem = styled.div<FlavourPillPropTypes>`
  box-shadow: 0px 8px 15px #D5D5D5;
  width: 25vw;
  background: white;
  margin: 0.5rem 0;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 4px 4px ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] || colors.flavourProfiles.default};
  }
`;

export const CaskListItemButton = styled.div`
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    transform: translateX(15px);
  }
`;

export const FlavourPill = styled.div<FlavourPillPropTypes>`
  background-color: ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] || colors.flavourProfiles.other };
  color: white;
  text-align: center;
  padding: 0.5rem 1rem;
  max-width: 200px;
  border-radius: 100px;
  margin: 0.5rem 0;
`

export const ActiveCaskHeader = styled.div`
  width: 300px;
  padding: 1rem 0;
`

export const FlavourStrip = styled.div<FlavourPillPropTypes>`
  background: ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] || colors.flavourProfiles.default};
  padding: 0.5rem 0rem;
  color: white;
  margin: 1rem 0 0;
`

export const ImageContainer = styled.div`
  width: 250px;
  height: 400px;
`