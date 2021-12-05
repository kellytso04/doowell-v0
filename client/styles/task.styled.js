import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  fontFamily: 'Varela Round', sans-serif;
  border: 1px white ridge;
  padding: 15px;
`

export const TextContainer = styled.span`
  float: left;
  font-family: 'Varela Round', sans-serif;
`

export const ButtonContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`