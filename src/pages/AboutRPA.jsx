import React from 'react'
import styled from 'styled-components'
import aboutbanner from '../assets/about-rpa-banner-bg.jpeg'
import aboutHomebg2 from '../assets/about-rpa-homebg2.jpeg'
import AboutRPAWork from '../components/AboutRPAWork'


const Container = styled.div`
  /* height: 500vh; */
`
const AboutBanner = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
  height: 100vh;
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url(${props => props.background});
`
const HomeBg2 = styled.div`
  height: 100vh;
  display: flex;
  @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    }
`
const Home2left = styled.div`
flex: 0.6;
   background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4)), url(${props => props.background});
`
const Home2right =styled.div`
  flex: 0.4;
  padding: 100px 30px;
`

const AboutRPA = ({companyname}) => {
  return (
    <Container >
      <AboutBanner background={aboutbanner}>
    <div>
<h1 className='fw-bolder'>Robotic Process <br />Automation (RPA)</h1>
<p>Grow your business at the pace of human ingenuity</p>
<button className='btn my-5 btn-danger fw-bold'>Try {companyname} for free</button>
    </div>
        </AboutBanner>
        <HomeBg2>
            <Home2left background={aboutHomebg2}>
            </Home2left>
            <Home2right className='bg-light'>
                <h1>What is Robotic Process <br />Automation?</h1>
                <p className='my-4'>Robotic process automation (RPA) can be seen as an army of <br />invisible workers, revolutionizing what business effiency means <br />today. It's a form a intelligent automation that emulates the <br />action of human employees, performing the same tasks and completing the same processes a person would - only faster and with <br />with zero mistakes.</p>
                <p className='my-4'>An RPA workforce is able to iteract with any app, manipulate<br />data, and communicate across systems. The solution is aperfect <br />fit for organization whose business processes include repetitive, <br />time-consuming tasks embedded in a complex digital environment.</p>
                <p className='border-bottom'></p>
            </Home2right>
        </HomeBg2>
        <AboutRPAWork />
      
    </Container>
  )
}

export default AboutRPA;