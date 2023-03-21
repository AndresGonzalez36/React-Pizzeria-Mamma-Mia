import { Button, Container } from 'react-bootstrap';
import React, { useContext } from 'react'
import MyContext from '../contexto/MiContexto.jsx'
import { formulaPedido } from '../utils/utils.js';


function Carrito() {

  const {pizzasAgregadas, precioTotal, setPizzasAgregadas,setPrecioTotal } = useContext(MyContext);

  const restarPizza=(id)=>{
    const index= pizzasAgregadas.findIndex((p)=> p.id === id);

    if(index >-1){
      if(pizzasAgregadas[index].cant>0){
      pizzasAgregadas[index].cant -= 1;
      if(pizzasAgregadas[index].cant ===0){
        pizzasAgregadas.splice(index,1)
      }
      setPizzasAgregadas([...pizzasAgregadas])
    }}
    setPrecioTotal(formulaPedido(pizzasAgregadas))
   }
  const sumarPizza=(id)=>{
    const index= pizzasAgregadas.findIndex((p)=> p.id === id);

    if(index >-1){
      pizzasAgregadas[index].cant += 1;
      setPizzasAgregadas([...pizzasAgregadas])
    }
    setPrecioTotal(formulaPedido(pizzasAgregadas))
  }
  return (
    <div >
      <Container>
      <h3>Detalle del Pedido:</h3>
      {
        pizzasAgregadas.map((p) =>
        <>
          <div key={p.id} className='cantidades'>
            <div className='pedido'>
            <img src={p.img} alt="" width={"80px"} />
            <p style={{ marginLeft: "15px" }}>{p.nombre}</p>
            </div>
            <div className='pedido'>
              <strong style={{ marginRight: "15px", color:"green" }}>${p.precio*p.cant}</strong>
              <Button variant="danger" style={{ height: "30px" }} onClick={()=>restarPizza(p.id)}>-</Button>
              <strong style={{ margin: "10px" }}>{p.cant}</strong>
              <Button variant="primary" style={{ height: "30px" }} onClick={()=>sumarPizza(p.id)} >+</Button>
            </div>
          </div>
          <hr />
          </>
        )
      }
      
      <h1>Total: ${precioTotal}</h1>
      <Button variant='success'>Ir a pagar</Button>
      </Container>
    </div>
  )
}

export default Carrito