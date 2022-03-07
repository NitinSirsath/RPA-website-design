import React, { useState } from "react";
import styled from 'styled-components';
import data from './HomeTabData'


const Container = styled.div`
  height: 100vh;
  padding: 0px 200px;
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
  display: flex;
	cursor: pointer; 
`;

const Tabs = styled.div`
	display: flex;
  flex-direction: column;
	gap: 10px;

    /* &::hover{
      color: red;
    } */
`;
const Right =styled.div`
  flex: 0.5;
  
  padding: 40px;
  /* margin: 30px 0px; */
`
const Left =styled.div`
  flex: 0.5;
`
const Icon = styled.div`
height: 45px;
width: 45px;
background-color: #ffffff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:  url(${props => props.background});
   
`  
const Link = styled.span`
  border-bottom: 1px solid black;
  font-weight: bold;
  color: #6b6a6a;

  &:hover{
    color: red;
  }
`
const Title = styled.span`
  font-weight: bolder;
  color: darkgrey;
`

  return (
    <Container>
    <Wrapper>
    <div className=''>
      <h1>Who are we?</h1>
      <p>{companyname} provides businesses like your with robotic process <br />automation (RPA) solution that help companies scale based on a human-centric and forward-looking strategy</p>
      <p>We design and deploy intelligent bussiness process automation to minimize operating costs and change the role and task of your human forces. Maximize your total value, all while keeping humans front-and-center</p>
      <Left>
      {/* <div>Logistics</div>
        <div>Manufacturing</div>
        <div>Healthcare</div>
        <div>Finance and Banking</div> */}
        <Tabs>
				{data.map((tab, idx) => (
					<Tab onClick={() => tabSwitcher(idx + 1)}><Link>{tab.title}</Link> </Tab>
				))}
			</Tabs>
      </Left>
    </div>
    <Right>
    <div className='d-flex align-items-center gap-3 p-3'> <Icon background={data[switchTab - 1].icon}></Icon><Title>{data[switchTab - 1].title}</Title> </div>
				<div> {data[switchTab - 1].para} </div>
    <img className='my-3' src={data[switchTab - 1].img} width='500px' alt={data[switchTab - 1].title} />
    </Right>
    </Wrapper>
    
  </Container>
  )
}

export default Whoarewe