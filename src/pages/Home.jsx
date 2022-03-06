import React from 'react'
import HomeCards from '../components/HomeCards';
import Whoarewe from '../components/Whoarewe';
import styled from 'styled-components';
import home from '../assets/homebg.jpeg'
import home2 from '../assets/homebg2.jpeg'
import home3 from '../assets/homebg3.jpeg'


const Container = styled.div`
      background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4)), url(${props => props.background});
    height: 100vh;
`
const Headline = styled.div`
    color: white;
    text-align: center;
    height: 100%;
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
const Home3 = styled.div`
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
const Quotes = styled.div`
display: grid;
place-content: center;
  height: 300px;
  color: white;
  background-image: linear-gradient(45deg, #046fbb,#0151a0);
`
// const Home4 = styled.div`
//   height: 100vh;
//   display: flex;
//   padding: 0px 300px;
// `

const Home = ({companyname}) => {
  return (
    <Container background={home}>
       <Headline className='d-flex justify-content-center align-items-center'>
       <div>
       <h1 className=''><span className='text-danger'>{companyname} multiply <br /> human potential</span> at your <br />company with
        <br /> Artificial Intelligence</h1>
        <div>
          <button className='btn my-5 btn-danger fw-bold'>Try {companyname} for free</button>
        </div>
        <div>
          <p className='text-secondary'>Scroll down for more benefits</p>
          <p className='pe-none'>&#9660;</p>
        </div>
       </div>
       
        </Headline> 
        <Quotes className=''>
          <h1 className='m-0'>"Quotes about website"</h1>
        </Quotes>
        <HomeBg2>
            <Home2left background={home2}>
            </Home2left>
            <Home2right className='bg-light'>
                <h1>Who are we?</h1>
                <p className='my-4'>{companyname} provides businesses like yours with robotic process <br />automation (RPA) solutions that help companies scale based on <br />a human-centric and forward-looking strategy</p>
                <p className='my-4'>We design and deploy intelligent business peocess automation to <br />minimize oprating costs and changes the role and tasks of your <br /> human forces. Maximize your total value, all while keeping <br />humans front-and-center</p>
                <p className='border-bottom'></p>
                <p className='fw-bold mt-5'>{companyname} was created by an United ideas with an established <br />postion and experience in scaling business with RPA solutions</p>
            </Home2right>
        </HomeBg2>
        <Home3 background={home3}>
    <div>
<h1 className='fw-bolder'>Maximize the value of RPA <br /> and scale up your <br /> business with humans <br />front-and-center</h1>
<p>With advanced AI solutions, {companyname} helps your company scale up <br />rapidly</p>
<button className='btn my-5 btn-danger fw-bold'>Try {companyname} for free</button>
    </div>
        </Home3>
        <HomeCards />
        <Whoarewe />
    </Container>   
  )
}

export default Home;