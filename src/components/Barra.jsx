import React, { useContext } from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MyContext from '../contexto/MiContexto.jsx'

const Barra = () => {
  const {precioTotal}= useContext(MyContext)

  return (
    <div>
      <Navbar bg="info" variant="light">
        <Container >
          <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/" >
            <Navbar.Brand  style={{ color:"white" }}>🍕 Pizeria Mamma Mia!</Navbar.Brand>
          </NavLink>
          <Nav className='me-3'>
            <NavLink  to="/Carrito">
              <Navbar.Brand className={({ isActive }) => (isActive ? "active" : undefined)}style={{ color:"white" }} >🛒 $ {precioTotal}</Navbar.Brand>
            </NavLink>
          </Nav>

        </Container>
      </Navbar>

    </div>
  )
}

export default Barra