import React from 'react'
import styled from 'styled-components';
import data from './homecard'

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(45deg, #046fbb,#0151a0);
  @media only screen and (max-width: 800px) {
        height: 250vh;
    }
`
const CardContainer =styled.div`

  display: grid;
  gap: 40px;
    grid-template-columns: repeat(3, 1fr );
      margin: 0px auto ;
      
    @media only screen and (max-width: 800px) {
        display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    }
`
const Card = styled.div`
  background-color: white;
  padding: 40px 20px ;
  width: 300px;
  border-radius: 3px;
  box-shadow: rgb(8, 45, 75) 0px 10px 40px -5px;
`

const Heading = styled.div`
  padding: 30px;
`
// const Image = styled.div`
//     background-image:  url(${props => props.background}); 
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: contain;
//     height: 60px;
//     width: 60px;
//     border-radius: 50%;
//     background-color: #f85229;
// `

const Img =styled.div`
  height: 40px;
  width: 40px;
  display: flex;
`

function HomeCards() {
  return (
    <Container>
      <Heading className=''>
        <h1 className='text-light text-center'>Key benefits for your business</h1>
      </Heading>
      <div className='d-flex justify-content-center align-items-center'>

      <CardContainer>
          {data.map((ele)=>{{
            return <Card key = {ele.title}>
              <div className='d-flex gap-3 align-items-center'>
                {/* <Image background={ele.img}></Image> */}
                <Img className='rounded-circle justify-content-center align-items-center justify-content-center bg-danger'><img src={ele.img} height='16px' alt="" /></Img>
                <div>{ele.title}</div>
              </div>
              <div className='pt-3'>
                <p className='m-0 p-0'>{ele.para}</p>
              </div>
            </Card>            
          }})}
      </CardContainer>
          </div>
    </Container>
  )
}

export default HomeCards;