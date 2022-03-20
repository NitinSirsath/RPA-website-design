import React from 'react'
import data from './homecardbusinessdata'
import styled from 'styled-components';
import home3 from '../assets/homebg3.jpeg'

const Container = styled.div`
    height: 100vh;
    padding: 0px 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url(${props => props.background});
`
const Card = styled.div`
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div`
background-color: #fff ;
    width: 140px;
    height:140px;
    border-radius: 50%;
   display: grid;
   place-items: center;
    box-shadow: rgba(105, 110, 116, 0.2) 0px 8px 24px;
`
const InfoSection = styled.div`
        width: 450px;
`
const Wrapper = styled.div`
    display: grid ;
    place-items: center ;
`

const HomeCardBusiness = () => {
  return (
    <Container background={home3}>
        <div>
            <h1 className='text-center'>Transform your company into a highly <br />effective and scalable business</h1>
        </div>
        <Wrapper  className='py-4'>
            {
                data.map((ele) => {
                    return <Card className='m-2' key={ele.id}>
                        <ImageContainer >
                            <img src={ele.img} height='50px' alt="" />
                        </ImageContainer>
                        <div className='mx-4'></div>
                        <InfoSection >
                            <h3>{ele.title}</h3>
                            <p>{ele.para}</p>
                        </InfoSection>
                    </Card>
                })
            }
        </Wrapper>
    </Container>
  )
}

export default HomeCardBusiness