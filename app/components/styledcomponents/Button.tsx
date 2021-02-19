import styled, { css } from 'styled-components';

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

export const AllButtonStyles = css<ButtonProps>`
  text-align: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;


  &:focus {
    outline: none;
  };
`;


export const Button = styled.button<ButtonProps>`
  ${ AllButtonStyles }
  padding: 1rem 2rem;
  margin: 2rem;
`;

export const SmallButton = styled.button<ButtonProps>`
  ${ AllButtonStyles }
  padding: 0.5rem;
  margin: 1rem;
`;

export const ButtonDiv = styled.div`
  color: inherit;
  background: inherit;
`;