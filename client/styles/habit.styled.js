import styled from 'styled-components';

export const HabitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Varela Round', sans-serif;
  border: 1px #f5e282 ridge;
  padding: 15px;
  margin: 5px;
  min-width: 35%;
  width: 100%;
`

export const TextContainer = styled.span`
  float: left;
  font-family: 'Varela Round', sans-serif;
  color: #F76C6C
`

export const ButtonContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`