import React, { useContext } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import MyContext from '../contexto/MiContexto'

const Home = () => {

  const { pizzas, pizzasAgregadas,setPizzasAgregadas,precioTotal, setPrecioTotal } = useContext(MyContext);
  const navigate = useNavigate();

  const irADetalle = (id) => {
    navigate(`/Detalle/${id}`);
 
  }
  const sumarPizza=(pizzas)=>{
    const index= pizzasAgregadas.findIndex((p)=> p.id === pizzas.id);

    if(index >-1){
      pizzasAgregadas[index].cant += 1;
      setPizzasAgregadas([...pizzasAgregadas])
    }else{
      const pizzasSelect = {id:pizzas.id,img:pizzas.img,nombre:pizzas.name ,cant:1,precio:pizzas.price}
      setPizzasAgregadas([...pizzasAgregadas, pizzasSelect])
    }
    setPrecioTotal(precioTotal+pizzas.price)
  }
  return (
    <div>
      <Header></Header>
      <Row>
        {
          pizzas.map((pizza) =>
            <Col key={pizza.id}>
              <Card style={{ width: '18rem'}} className="mt-3">
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                <hr />
                <strong>Ingredientes:</strong>
                <ul>
                  {
                  pizza.ingredients.map((i) => <li key={i}>🍕 {i}</li>)
                  }
                </ul>
                <hr />
                <h2>${pizza.price}</h2>
                </Card.Body>
                <Card.Body>
                  <Button variant="info" onClick={()=>irADetalle(pizza.id)} >Ver Mas👀 </Button>
                  <Button variant="danger" style={{ margin: "3px" }} onClick={()=>sumarPizza(pizza)} >Añadir 🛒</Button>

                </Card.Body>
              </Card>
            </Col>
          )
        }
      </Row>
    </div>
  )
}

export default Home