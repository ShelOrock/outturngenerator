import styled, { css } from 'styled-components';

export const FormContainer = css`
  width: 60vw;
  margin: auto;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 8px 15px #D5D5D5;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginFormContainer = styled.div`
  ${ FormContainer }
  width: 40%;
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const InputFormContainer = styled.div`
  ${ FormContainer };
`

export const InputModule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  width: 100%;
`

export const InputLabel = styled.label`
  padding: 1rem, 0.5rem;
`

export const InputField = styled.input`
  margin: 0.5rem 0;
  height: 1.2rem;
  width: ${ ({ size, theme: { input } }) => size ? input.size[size].width : input.size.default.width };

  &focus: {
    border: 1px solid #204468;
  }
`

export const TextArea = styled.textarea`
  padding: 0.5rem;
  height: 4rem;
  resize: none;

  &focus: {
    border: 1px solid #204468;
  }
`

export const Checkbox = styled.input`
  margin: 1rem;
`

export const Select = styled.select`
  width: 125px;
  background-color: ${ ({ theme: { colors } }) => colors.white };
  color: ${ ({ theme: { colors } }) => colors.primary };
  border: none;
  border-radius: 3px;
  padding: 1rem;
  margin: 1rem 2rem;

  &:focus {
    border: 1px solid ${ ({ theme: { colors } }) => colors.primary };
    outline: none;
  }

`;

export const Option = styled.option`
  background-color: ${ ({ theme: { colors } }) => colors.lightgray };
  color: ${ ({ theme: { colors } }) => colors.primary };
  padding: 1rem;
  border: 1px solid black;
`