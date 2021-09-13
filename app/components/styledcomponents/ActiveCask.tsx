import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 75%;
  box-shadow: 0px 8px 15px #D5D5D5;
  border-radius: 20px;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyModuleGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BodyModule = styled.div`
  margin: 0.5rem;
`;