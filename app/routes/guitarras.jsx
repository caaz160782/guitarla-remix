import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listadoGuitarras";
import guitarrasStyles from '~/styles/guitarras.css'

export function meta() {
  return(
    [
    {    
    title:'GuitraLA - Tienda',
    description:'Venta de guitarras'
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


export async function loader(){
  const guitarras= await getGuitarras();
  return guitarras.data
}

const Tienda = () => {

  const guitarras =useLoaderData();
  return (
    <main className="contenedor">
      <ListadoGuitarras  
        guitarras={guitarras}
      />      
    </main>
  )
}

export default Tienda
