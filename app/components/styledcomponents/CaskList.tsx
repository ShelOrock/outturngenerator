import styled from 'styled-components';

interface CaskListItem {
  flavourProfile?: string;
}

export const CaskListItem = styled.div<CaskListItem>`
  display: flex;
  flex-direction: column;
  background: white;
  width: 25vw;
  margin: 0.5rem 0;
  box-shadow: 0px 8px 15px #D5D5D5;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 4px 4px ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] || colors.flavourProfiles.default};
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
