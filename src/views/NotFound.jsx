import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <div className='detalle text-aling:"center"'>
        <Container>
        <h1 style={{color:"green",marginLeft:"25rem"}}>Aqui ya no hay pizzas...</h1>
        <img src="https://www.geekgirlauthority.com/wp-content/uploads/2019/03/tmnt-pizza-1182x640.jpg" alt="" />
        </Container>
    </div>
  )
}

export default NotFound