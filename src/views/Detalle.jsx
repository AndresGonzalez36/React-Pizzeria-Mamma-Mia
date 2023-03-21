import React, { useContext } from 'react';
import { Card, Button, Container, } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MyContext from '../contexto/MiContexto.jsx';
import { formulaPedido } from '../utils/utils.js';


const Detalle = () => {
  const { id } = useParams();
  const { pizzas, pizzasAgregadas, setPizzasAgregadas, setPrecioTotal } = useContext(MyContext);


  const pizzaDetalle = pizzas.filter((p) => p.id === id);

  const sumarPizza = (id) => {
    const index = pizzasAgregadas.findIndex((p) => p.id === id);

    if (index > -1) {
      pizzasAgregadas[index].cant += 1;
      setPizzasAgregadas([...pizzasAgregadas])
    }
    setPrecioTotal(formulaPedido(pizzasAgregadas))
  }

  return (
    <div >
      <Container>
        <div className='cardDetalle'>

          <img src={pizzaDetalle[0].img} alt="" style={{ width: "50%" }} />
          <div className='detalle'>

            <Card.Title>{pizzaDetalle[0].name}</Card.Title>
            <hr />
            <p>{pizzaDetalle[0].desc}</p>
            <strong>Ingredientes:</strong>
            <ul>
              {
                pizzaDetalle[0].ingredients.map((i) => <li key={i}>🍕 {i}</li>)
              }
            </ul>
            <div className='precioDetalle'>
            <h2>Precio: ${pizzaDetalle[0].price}</h2>


            <Button variant="danger" style={{ marginLeft: "12rem" }} onClick={() => sumarPizza(pizzaDetalle[0].id)}>Añadir 🛒</Button>
            </div>
          </div>

        </div>

      </Container>

    </div>
  )
}

export default Detalle