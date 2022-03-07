import React from 'react'
import data from './homecardbusinessdata'
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    padding: 0px 200px;
`
const Card = styled.div`
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div`
    width: 100px;
    border-radius: 50%;
   display: grid;
   place-items: center;
    height: 100px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const HomeCardBusiness = () => {
  return (
    <Container>
        <div>
            <h1 className='text-center'>Transform your company into a highly <br />effective and scalable business</h1>
        </div>
        <div>
            {
                data.map((ele) => {
                    return <Card key={ele.id}>
                        <ImageContainer>
                            <img src={ele.img} height='50px' alt="" />
                        </ImageContainer>
                        <div>
                            <h3>{ele.title}</h3>
                            <p>{ele.para}</p>
                        </div>
                    </Card>
                })
            }
        </div>
    </Container>
  )
}

export default HomeCardBusiness