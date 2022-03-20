import React from 'react'
import styled from 'styled-components'
import overview from '../assets/productspage/overview.jpg'
import develope from '../assets/productspage/develop-img.png'
import Orchestrate from '../assets/productspage/orchestrate.png'
import DeployCard from '../components/products/DeployCard'


const Home = styled.div`
  padding: 200px 300px;
  background-color: rgba(9, 44, 66, 1) ;
  color:white ;
`
const Home2 = styled.div`
  padding: 150px 300px;
  
`

const Home3 = styled.div`
  padding: 100px 300px ;

`
const CardandInfo = styled.div`
  display: flex ;
  padding: 50px 0px;
`
const CardImg = styled.div`
  flex: 0.5 ;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`
const CardInfo = styled.div`
  flex: 0.5 ;
  padding: 20px;
  display:flex ;
  align-items: center;
`
const OrchestrateContainer = styled.div`
  padding: 50px 0px;
`

const Products = () => {
  return (
    <div>
      <Home>
      <h1 className='fw-bold'>Fast Forward</h1>
      <h2 className='fw-light'>RPA Platform</h2>
      <p className='fw-bold'>Everything you need to implement an infinitely scalable and <br />super connected RPA ecosystem in a matter of days</p>
      <button className='btn btn-danger fw-bold'>TALK TO US</button>
      </Home>
      <Home2>
        <h1>Introducing the next-gen RPA platform</h1>
        <p>ElectroNeek enables RPA developers and admins to do their best in the shortest time possible. <br /> Explore how components of the platform’s ecosystem work together to deliver an unmatched <br /> automation experience.</p>
        <div>
          <img src={overview} height='400' alt="" />
        </div>
      </Home2>
      <Home3 className='bg-light'>
      <div className='h7 text-secondary'>Develop</div>
      <div>
        <h1 className='fw-bolder'>Create automated workflows <span className='fw-light'> in a snap</span></h1>
        <p>RPA developers love using Studio Pro: an integrated development environment and the birthplace  of  <br />intelligent bots. Automate right away with ready-made visual building blocks. You can always customize <br /> them further using JavaScript.</p>
      </div>
      <CardandInfo>
    <CardImg><img src={develope} alt="" height='330'  /></CardImg>
    <CardInfo>
     <div>
     <h2 className='fw-bold'>Build, test, and maintain <span className='fw-light'>with ease</span></h2>
      <p> Studio Pro is an all-you-need RPA development toolkit  that covers all stages of the process: from creating a bot to testing, deployment, and maintenance.</p>
     </div>
    </CardInfo>
      </CardandInfo>


      <DeployCard />

      <OrchestrateContainer>
      <div className='h7 text-secondary'>Orchestrate</div>
      <div>
      <h1 className='fw-bolder'>Manage all your automated workflows <span className='fw-light'> in one place</span></h1>
        <p>Instantly connect created bots to SaaS Orchestrator: a single web-based control room to manage and keep an <br /> eye on every automation — within a company or in several organizations at once. With SaaS Orchestrator API, <br /> you can easily integrate your current IT infrastructure and existing automations with ElectroNeek’s <br /> RPA platform.</p>
      </div>
      <CardandInfo>
    <CardImg><img src={Orchestrate} alt="" height='330'  /></CardImg>
    <CardInfo>
     <div>
     <h2 className='fw-bold'>Connect bots<span className='fw-light'>in a click</span></h2>
      <p> Publish RPA bots to SaaS Orchestrator right from Studio Pro. Combine them into complex sequences or connect with any other solution for automation, such as Zapier.</p>
     </div>
    </CardInfo>
      </CardandInfo>
      </OrchestrateContainer>

     
      </Home3>
    </div>
  )
}

export default Products