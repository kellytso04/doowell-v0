import styled from 'styled-components';

export const StyledHabitContainer = styled.div`
  border: #24305E 5px solid;
  background-color: white;
  max-width: 30%;
  height: auto;
`

export const StyledHabitList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  overflow-y: auto;
  scroll-behavior: smooth;
  margin: 0;
`

export const StyledHabitMsg = styled.div`
  color: #374785;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 8px;
  font-family: 'EB Garamond', sans-serif;
`