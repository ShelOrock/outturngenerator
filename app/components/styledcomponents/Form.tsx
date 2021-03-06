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
  padding: 1rem;
  background-color: white;
  box-shadow: 0 8px 15px #D5D5D5;
  border-radius: 2px;
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
  margin: 1rem;
  width: 100%;
`

export const InputLabel = styled.label<InputPropTypes>`
  color: ${ ({ theme: { colors } }) => colors.darkgray };
  padding: 0.5rem 0;
  width: ${ ({ inputSize, theme: { input } }) => inputSize ? input.size[inputSize].width : input.size.default.width };
`

export const InputField = styled.input<InputPropTypes>`
  padding: 0.5rem 1rem;
  height: 1.7rem;
  width: ${ ({ inputSize, theme: { input } }) => inputSize ? input.size[inputSize].width : input.size.default.width };
  background-color: ${ ({ theme: { colors } }) => colors.lightgray };
  border: none;
  border-radius: 3px;

  &focus: {
    border: 1px solid #204468;
  }
`

export const TextArea = styled.textarea`
  background-color: ${ ({ theme: { colors } }) => colors.lightgray };
  border: none;
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 0.5rem;
  font-family: Roboto;
  height: 6rem;
  width: 80%;
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