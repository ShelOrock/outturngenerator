import styled, { css } from 'styled-components';

interface InputFormContainerPropTypes {
  width: string;
}

interface SelectPropTypes {
  flavourProfile?: string;
  width?: string;
}

interface InputPropTypes {
  inputSize?: string;
}

export const FormContainer = css<InputFormContainerPropTypes>`
  width: ${ ({ width }) => width };
  margin: auto;
  padding: 8px;
  background-color: white;
  box-shadow: 0 8px 15px #D5D5D5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputFormContainer = styled.div`
  ${ FormContainer };
`

export const InputModule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Information = styled.div`
  display: flex;
  margin: 4px 16px 0;
`;

export const InputLabel = styled.label<InputPropTypes>`
  color: ${ ({ theme: { colors } }) => colors.darkgray };
  padding: 4px 0;
`

export const InputField = styled.input<InputPropTypes>`
  padding: 8px 16px;
  height: 24px;
  background-color: ${ ({ theme: { colors } }) => colors.lightgray };
  border: none;
  border-radius: 4px;

  &focus: {
    border: 1px solid #204468;
  }
`

export const TextArea = styled.textarea`
  background-color: ${ ({ theme: { colors } }) => colors.lightgray };
  border: none;
  padding: 8px 16px;
  font-family: Roboto;
  height: 48;
  resize: none;
 

  &focus: {
    border: 1px solid #204468;
  }
`

export const Checkbox = styled.input`
  margin: 0 1rem;
`

export const Select = styled.select<SelectPropTypes>`
  width: ${ ({ width }) => { console.log(width); return width || '125px' }};
  background-color: ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] || colors.white };
  color: ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] ? colors.white : colors.primary };
  border: none;
  border-radius: 3px;
  padding: 1rem;
  box-shadow: 0px 4px 8px #D5D5D5;

  &:focus {
    border: 1px solid ${ ({ flavourProfile, theme: { colors } }) => colors.flavourProfiles[flavourProfile] ? colors.white : colors.primary };
    outline: none;
  }

`;

export const Option = styled.option`
  color: ${ ({ theme: { colors } }) => colors.primary };
  padding: 1rem;
  border: 1px solid black;
`

export const Feedback = styled.p`
  color: #E93935;
`;