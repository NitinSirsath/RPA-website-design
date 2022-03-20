import React from 'react'
import styled from 'styled-components'
import mainbg from '../assets/homebg3.jpeg'
import data from './aboutrpacarddata'

const Container = styled.div`
     background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${(props) => props.background});
`
const Heading = styled.div`
padding: 60px 460px 40px;
text-align: center;
`
const CardContainer = styled.div`
padding: 40px 200px;
     display: grid;
     place-items: center ;
  gap: 20px;
    grid-template-columns: repeat(3, 1fr );
      margin: auto auto ;
      
    @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    }
`

const Card = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #ACA7CB;
  padding: 40px 20px ;
  width: 300px;
  border-radius: 3px;
`
const ImageContainer = styled.div`
    display: grid ;
    place-items: center;
    
        div{
            height: 60px;
            width: 60px;
            display: grid ;
    place-items: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
        }
`

const AboutRPACard = () => {
  return (
    <Container background={mainbg}>
       <Heading>
       <h1>What processes benefit from RPA?</h1>
       <p>Any process that is high-volume, repetitive, and driven by business rules can be a great opportunity for leveraging RPA. No task is too simple for automation, if it’s repeated often enough.</p>
       <h3>RPA can mimic most actions of human employees</h3>
       </Heading>
       <CardContainer>
           {data.map((ele) => {
               return <Card key={ele.id}>
                   <div>
                       <ImageContainer>
                           <div className='rounded-circle bg-light'>
                           <img src={ele.img} height='40px' alt="" />
                           </div>
                       </ImageContainer>
                       <div>
                           <p className='text-center my-4 text-light'>{ele.para}</p>
                       </div>
                   </div>
               </Card>
           })}
       </CardContainer>
    </Container>
  )
}

export default AboutRPACard