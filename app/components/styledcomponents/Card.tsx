import styled from 'styled-components'


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4 - 2rem);
  min-height: 350px;
  max-height: 400px;
  margin: 2rem;
  box-shadow: 0px 8px 15px #D5D5D5;
  transition: all 0.3s ease 0s;



  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px #21A0A066;
  }
`

export const Card = styled.div`
  width: 100%;
  height: 400px;
`

export const CardImage = styled.div`
  width: 100%;
  min-height: 200px;
  border-bottom: 1px solid lightgray;
`

export const CardText = styled.div`
  width: 100%;
  background: #21A0A0;
  color: white;
  padding: 1rem 0;
`