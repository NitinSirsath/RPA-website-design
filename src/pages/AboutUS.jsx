import React from 'react'
import styled from 'styled-components';
import banner from '../assets/aboutuspage/aboutusbanner.jpeg'
import mission from '../assets/aboutuspage/aboutusmissionbg.jpeg'
import Values from '../components/aboutus/Values';
import Vision from '../components/aboutus/Vision';

const Container = styled.div`
`
const Banner = styled.div`
padding: 200px 200px;
color: white;
/* display: flex; */
align-items: center;
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url(${props => props.background});
`
const Mission = styled.div`
  /* text-align: center; */
  padding: 100px 350px;
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url(${props => props.background});
`
const AboutUS = ({companyname}) => {
  return (
    <Container>
      <Banner background={banner}>
        <h1>Multiplying <span className='text-danger'>Human <br /> Potential</span></h1>
        <p>{companyname} mission is to help our clients improve their <br /> potential for growth and innovation through smart technology</p>
      </Banner>
      <Mission background={mission}>
    <h1 className='mb-5 text-danger'>Mission</h1>
<p className='fw-bold'>Imagine a world in which each employee, in any industry, loves their  <br /> job and gives it their all. RPA makes this possible by channeling  <br />  human potential towards the most ambitious,  challenging, and exciting work.</p>
<p className='fw-normal'>We want to give professionals the ability to focus on tasks that generate the <br />  most value.  To achieve this, we eliminate boring, repetitive  processes from  <br />the task-lists of  human staff members and hand them off  <br />to a tireless digital workforce.  This results in saved time, lower costs, <br /> improved efficiency,  and a higher quality of service.</p>
<div className='border-bottom'></div>
      </Mission>
      <Vision />
      <Values />
    </Container>
  )
}

export default AboutUS