import React from 'react'
import styled from 'styled-components'
import data from './valuesdata'

const Container = styled.div`
    padding: 150px 250px;
`
const CardContainer = styled.div`
    display: grid ;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
`
const Card = styled.div`
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; 
   padding: 30px 35px;
   border-radius: 5px ;
`
const ImageContainer = styled.div`
    border-radius:50% ;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; 
    padding: 10px;
    margin:0px 10px ;
`
const ImgTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Values = () => {
  return (
    <Container className='bg-light'>
        <div className='my-5'>
            <h1 className='text-danger'>Values</h1>
        </div>
        <CardContainer>
            {data.map((ele) => {
                return <Card key={ele.id}>
                    <ImgTitleWrapper className=''>
                        <ImageContainer><img src={ele.img} alt="" height='30' /></ImageContainer>
                        <h3 className='text-secondary'>{ele.title}</h3>
                    </ImgTitleWrapper>
               <p className='pt-3'>{ele.para}</p>
                </Card>
            })}
        </CardContainer>

    </Container>
  )
}

export default Values