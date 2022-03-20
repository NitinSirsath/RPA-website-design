import React from 'react'
import styled from 'styled-components'
import aboutbanner from '../assets/about-rpa-banner-bg.jpeg'
import aboutHomebg2 from '../assets/about-rpa-homebg2.jpeg'
import aboutbg3 from '../assets/about-rpa-bg3.jpeg'
import AboutRPAWork from '../components/AboutRPAWork'
import AboutRPACard from '../components/AboutRPACard'
import AboutRPAfeatures from '../components/AboutRPAfeatures'


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
const Aboutbg3 = styled.div`
 display: flex;
  @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
   
    }
  
`
const Aboutbg3Left = styled.div`
  flex: 0.6;
   background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4)), url(${props => props.background});
`
const Aboutbg3Right = styled.div`
  flex: 0.4;
  padding: 100px 70px;
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
        <Aboutbg3>
            <Aboutbg3Left background={aboutbg3}>1
            </Aboutbg3Left>
            <Aboutbg3Right className='bg-light'>
                <h1>Empowering teams with <br /> RPA</h1>
                <p className='my-4'>RPA is intuitive and very easy to work with. It doesn’t require special knowledge from teams or executive officers, but it does offer a vast array of options, such as the ability to schedule, duplicate and share custom workflows across the organization.</p>
                <p className='my-4'>The result? Employees with freed up time and attention, ready to focus on what they do best, while in the background, a powerful digital workforce takes care of the most cumbersome processes.</p>
                <p className=''>RPA is a smart solution, using the capabilities of machine learning and artificial intelligence to power automation. It doesn’t replace people. Instead, it takes on tasks no one enjoys, and allows human employees to deliver their unique value.</p>
            </Aboutbg3Right>
        </Aboutbg3>
        <AboutRPACard />
        <AboutRPAfeatures />
      
    </Container>
  )
}

export default AboutRPA;