import styled from 'styled-components';

interface ButtonProps {
  variant?: string;
  disable?: boolean;
};

interface ButtonVariantColorProps {
  background?: string;
  color?: string;
};

const convertButtonVariantToColor = (variant: string): ButtonVariantColorProps => {
  switch(variant) {
    case 'primary': 
      return {
        background: '#21A0A0',
        color: 'white'
      };

    case 'secondary':
      return {
        background: 'white',
        color: '#21A0A0'
      };

    default:
      return {
        background: '#21A0A0',
        color: 'white'
      };
  };
};

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button<ButtonProps>`
  background: ${ props => props.disabled ? '#DDD' : convertButtonVariantToColor(props.variant).background };
  color: ${ props => props.disabled ? '#21A0A0' : convertButtonVariantToColor(props.variant).color };
  padding: 1rem 2rem;
  margin: 2rem;
  text-align: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  box-shadow: 0 8px 15px #D5D5D5;

  }
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 20px #21A0A066;
  }
  &:focus {
    outline: none;
  }
`;

export const SmallButton = styled.button<ButtonProps>`
  padding: 0.5rem;
  margin: 1rem;
  background: ${ props => props.disabled ? '#DDD' : convertButtonVariantToColor(props.variant).background };
  color: ${ props => props.disabled ? '#21A0A0' : convertButtonVariantToColor(props.variant).color };
  text-align: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  box-shadow: 0 8px 15px #D5D5D5;

  &:focus {
    outline: none;
  }
`;

export const ButtonDiv = styled.div`
  color: inherit;
  background: inherit;
`;