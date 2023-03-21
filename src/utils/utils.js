const formulaPedido = (valorTotal) =>{
    let total =0;
    valorTotal.map((p)=>{
        total = total+ (p.precio*p.cant);
    })
    return total;
}
export {formulaPedido}