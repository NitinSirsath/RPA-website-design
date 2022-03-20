import React from 'react'
import data from './visiondata'
import styled from 'styled-components'

const CardContainer = styled.div`
    display:  grid;
    grid-template-columns: repeat(3 , 1fr);
    padding: 100px 250px;
    gap:30px ;
  background-color: rgba(9, 44, 66, 1) ;
  color:white ;
`

const Vision = () => {
  return (
    <div>
  <CardContainer>
            {data.map((ele) => {
                return <div  key={ele.id}>
                   <div className='d-flex gap-3 align-items-center'>
                       <img src={ele.img} alt="" height='25' />
                       <h4>{ele.title}</h4>
                   </div>
                   <p className='pt-2'>{ele.para}</p>
                </div>
            })}

        </CardContainer>
    </div>
  )
}

export default Vision