import React from 'react'
import styled from 'styled-components'
import data from './deploycarddata'

const Container = styled.div`
    
`
const CardContainer = styled.div`
    display:  grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  
`
const ImgContainer = styled.div`
    margin: 30px 0px;
`

const DeployCard = () => {
  return (
    <Container>
        <div className='h7 text-secondary'>Develop</div>
      <div>
        <h1 className='fw-bolder'>Run an unlimited  <span className='fw-light'>number of bots</span></h1>
        <p>With Bot Runner, you can have an unlimited number of free bots to face any automation challenge. Be <br />it a bot for a one-time, high-volume task, or a simple bot to cover a part in a complex process, you never <br /> have to worry about extra expenses.</p>
        </div>
        <CardContainer>
            {data.map((ele)=> {
                return <div key={ele.id}>
                    <ImgContainer>
                        <img src={ele.img} alt="" height='150' />
                    </ImgContainer>
                    <div>
                        <h3 className='fw-bolder'>{ele.title} <span className='fw-light'><br />{ele.sub}</span></h3>
                        <p>{ele.para}</p>
                    </div>
                </div>
            })}
        </CardContainer>
    </Container>
  )
}

export default DeployCard