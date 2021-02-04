import styled from 'styled-components';

interface ToastContainerPropTypes {
  variant: 'FAIL' | 'SUCCESS';
  className: string;
}

interface ToastContainerPropTypes {}

export const ToastContainer = styled.div<ToastContainerPropTypes>`
  position: fixed;
  transition: all 0.3s ease 0s;
  
  ${ props => props.className == 'hidden'
  ? `
    top: 6rem;
    right: -4rem;
  `
  : `
    top: 6rem;
    right: 4rem;
  `}

  background-color: ${ props => {
    switch(props.variant) {
        case 'SUCCESS':
            return '#0B1D51'

        case 'FAIL':
            return '#DE3C4B'

        default:
            return '#21A0A0'
      };
    }
  }
`

export const ToastMessage = styled.div`
  padding: 2rem;
  box-shadow: 0px 8px 15px #D5D5D5;
  };

  color: white;
`