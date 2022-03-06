import React from 'react'
import styled from 'styled-components';
import data from './aboutrpaworkdata'

const Container = styled.div`
    text-align: center;
    height: 90vh;
`
const CardContainer =styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 50px;
      
    @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    }
`
const Card =styled.div`
width: 350px;
`
const ImageBox = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 9999px;
    width: 130px;
    height: 130px;
    display: grid;
    place-items: center;
    margin: auto;
`


const AboutRPAWork = () => {
  return (
    <Container>
        <div className='my-5'>
            <h1>How does RPA work?</h1>
            <p className='my-3'> RPA is an easy to use, cost effective automation tool for business. It's applicable <br />across industries, including finance, healthcare, manufacturing, retail, logistics, and <br />many others. Organizations don't need anu special training to interact with the <br />digital workforce</p>
        </div>
        <CardContainer className='my-5'>
        {data.map((ele)=>{
            return <Card key={ele.title}>
                <ImageBox className='my-5'>
                    <img src={ele.img} height='80px' alt="" />
                </ImageBox>
                <div>
                    <h2 className='my-3'>{ele.title}</h2>
                    <p>{ele.para}</p>
                </div>
            </Card>
        })}
        </CardContainer>
    </Container>
  )
}

export default AboutRPAWork;