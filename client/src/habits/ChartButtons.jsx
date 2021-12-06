import React from 'react';
import styled from 'styled-components';

const ChartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 5px;
`

const Button = styled.button`
  height: 40px;
  width: 120px;
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  color: #24305E;
  border: #24305E 5px solid;
  border-radius: 10px;
  margin: 2px;
`

const ChartButtons = (props) => {
  return (
    <ChartButtonContainer className='chart-buttons' >
      <Button>This last week</Button>
      <Button>This last month</Button>
    </ChartButtonContainer>
  )
}

export default ChartButtons;

/* <div className='chart-msg' >
Generate a chart for...
</ div>
*/