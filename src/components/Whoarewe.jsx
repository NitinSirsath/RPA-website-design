import React, { useState } from "react";
import styled from 'styled-components';
import data from './HomeTabData'


const Container = styled.div`
  height: 100vh;
  padding: 0px 300px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    /* margin-top: 20px;
    padding-top: 20px; */
    }
`

const Whoarewe = ({companyname}) => {
  const [switchTab, setSwitchTab] = useState(1);

	const tabSwitcher = (tabNum) => {
		setSwitchTab(tabNum);
	};
  const Tab = styled.div`
	background-color: grey;
	padding: 30px;
	cursor: pointer;
`;
const Tabs = styled.div`
	display: flex;
	gap: 10px;
`;
    
  return (
    <Container>
    <Wrapper>
    <div>
      <h1>Who are we?</h1>
      <p>{companyname} provides businesses like your with robotic process <br />automation (RPA) solution that help companies scale based on <br />a human-centric and forward-looking strategy</p>
      <p>We design and deploy intelligent bussiness process automation to <br />minimize operating costs and change the role and task of your <br />human forces. Maximize your total value, all while keeping <br />humans front-and-center</p>
      <div>
      {/* <div>Logistics</div>
        <div>Manufacturing</div>
        <div>Healthcare</div>
        <div>Finance and Banking</div> */}
        <Tabs>
				{data.map((tab, idx) => (
					<Tab onClick={() => tabSwitcher(idx + 1)}>{idx + 1}</Tab>
				))}
			</Tabs>
      </div>
    </div>
    <div>
    <div> {data[switchTab - 1].title} </div>
				<div> {data[switchTab - 1].para} </div>
    </div>
    </Wrapper>
    
  </Container>
  )
}

export default Whoarewe