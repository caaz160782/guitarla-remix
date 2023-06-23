import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import guitarrasStyles from '~/styles/guitarras.css'
import { useOutletContext } from '@remix-run/react';

export async function loader({params}){
  const  {guitarraUrl}= params;
  const guitarra= await getGuitarra(guitarraUrl); 
  
  if(guitarra.data.length ===0){
    throw new Response('',{
      status:404,
      statusText:'Guitarra no encontrada'
    })
  }
  return guitarra.data  
}

export function meta({data}) {
  
  if(!data){
    return(
      [
      {    
      title:`GuitraLA - No found`,
      description:`Descripcion Not found`
      }]
    )
  }


  return(
    [
    {    
    title:`GuitraLA - ${data[0]?.attributes.nombre}`,
    description:`Descripcion de ${data[0]?.attributes.nombre}`
    }]
  )
}

export function links() {
  return [
    { 
        rel:'stylesheet',
        href:guitarrasStyles
     },
  ];
}    

const Guitarra = () => {
  const guitarra =useLoaderData();
  const {descripcion,imagen,nombre,precio}=guitarra[0]?.attributes;
  const [cantidad, setCantidad]=useState(0)

  const cat=useOutletContext();
console.log(cat)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(cantidad <1){
      alert('Debes seleccionar una cantidad')
      return
    }
    const guitarraSeleccionada={
      id:guitarra[0]?.id,
      imagen:imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    
  }
 
  return (
    <main className="guitarra">
    <img src={imagen.data.attributes.url} alt={`imagen_${nombre}`} />
    <div className="contenido">        
      <h3>{nombre}</h3>
      <p className="texto">{descripcion}</p>
      <p className="precio">$ {precio}</p>
      <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select id="cantidad"
           onChange={e=> setCantidad(parseInt(e.target.value))}
          >
            <option value="0">Seleccione </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
           type="submit"
           value="Agregar al carrito"
          />
          
          
      </form>
    </div>
  </main>
  )
}

export default Guitarra
