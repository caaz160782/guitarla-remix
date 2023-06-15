import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import Guitarra from "~/components/guitarra"
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
    <div className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {guitarras?.length  && (
        <div className="guitarras-grid">
          {
            guitarras?.map(guitarra =>(
                <Guitarra
                  key={guitarra?.id}
                  guitarra={guitarra?.attributes}
                />
            ))
          }

        </div>
      )}
    </div>
  )
}

export default Tienda
