import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Barra from './components/Barra';
import MyContext from "./contexto/MiContexto.jsx";
import Home from "./views/Home";
import { useEffect, useState } from "react";
import Carrito from "./views/Carrito.jsx";
import Detalle from "./views/Detalle";
import NotFound from "./views/NotFound";

function App() {
const [pizzas, setPizzas]= useState([]);
const [pizzasAgregadas, setPizzasAgregadas] = useState([]);
const [precioTotal, setPrecioTotal] = useState(0);

async function obtenerPizzas(){
  const res = await fetch(`http://localhost:3000/pizzas.json`);
  const data = await res.json();
  console.log (data)
 setPizzas(data);

  };

useEffect(() => {
  obtenerPizzas();
  },[]);

  return (
    <div className="App">
    <MyContext.Provider value={{pizzas, pizzasAgregadas,setPizzasAgregadas, precioTotal, setPrecioTotal}}>
     <BrowserRouter>
     <Barra></Barra>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Carrito" element={<Carrito/>}/>
      <Route path="/Detalle/:id" element={<Detalle/>}/>
      <Route path='*' element={<NotFound/>}/>
      
     </Routes>
     </BrowserRouter>
     </MyContext.Provider>
    </div>
  );
}

export default App;
