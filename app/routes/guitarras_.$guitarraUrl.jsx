
import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import guitarrasStyles from '~/styles/guitarras.css'

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
 
  return (
    <main className="guitarra">
    <img src={imagen.data.attributes.url} alt={`imagen_${nombre}`} />
    <div className="contenido">        
      <h3>{nombre}</h3>
      <p className="texto">{descripcion}</p>
      <p className="precio">$ {precio}</p>
    </div>
  </main>
  )
}

export default Guitarra
