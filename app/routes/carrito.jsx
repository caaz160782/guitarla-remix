import carritoStyles from '../styles/carrito.css'
import { useOutletContext } from '@remix-run/react';
export function meta() {
    return(
      [
      {    
      title:'GuitraLA - Carrito',
      description:'tu compra'
      }]
    )
  }
  

export function links() {
    return [
      { 
          rel:'stylesheet',
          href:carritoStyles
       },
    ];
  }    
  

const Carrito = () => {
  const {carrito} =useOutletContext();

    return (
    <main className='contenedor'>
        <h1 className='heading'> Carrito de Compras</h1>
        <div className='contenido'>
            <div className='carrito'>
                <h2>Articulos</h2>

                {carrito.length === 0 ? 'Carrito vacio':(
                  carrito.map(producto =>(
                    <div key={producto.id} className='producto'>
                        <div>
                          <img src={producto.imagen} alt={producto.nombre} />
                        </div>
                        <div>
                          <p className='nombre'>{producto.nombre} </p>
                          <p>Cantidad:  </p>
                          <select 
                            className='select'
                            value={producto.cantidad}

                          >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                          <p className='precio'>$<span> {producto.precio}</span> </p>
                          <p className='subTotal'>Subtotal <span>$ {producto.cantidad * producto.precio}</span> </p>
                        </div>
                    </div>
                  ))
                )}
            </div>
            <aside className='resumen'>
                <h3> Resumen del Pedido</h3>
                <p>Total a pagar: $ </p>
                
            </aside>
        </div>
       
    </main>
  )
}

export default Carrito