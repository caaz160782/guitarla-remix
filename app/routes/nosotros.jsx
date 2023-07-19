import nosotrosImg from '../../public/img/nosotros.jpg'
import nosotrosStyles from '~/styles/nosotros.css'
import { useOutletContext } from '@remix-run/react';

export function meta() {
  return(
    [
    {    
    title:'GuitraLA - Nosotros',
    description:'Informacion de guitarras'
    }]
  )
}

export function links() {
  return [
    { 
        rel:'stylesheet',
        href:nosotrosStyles
     },
     {
      rel: 'preload',
      href:nosotrosImg,
      as: 'image'
     }    
  ];
}    

const Nosotros = () => {


  return (
    <main className="contenedor nosotros">
       <h2 className="heading"> Nosotros </h2>

       <div className="contenido">
           <img src={nosotrosImg} alt='Nosotros imagen' />
          <div>
            <p>Duis cursus elementum eros, eleifend efficitur sapien euismod nec. Nulla imperdiet eros sagittis, gravida nisl lacinia, venenatis orci. 
               Suspendisse risus ex, commodo vitae felis id, iaculis scelerisque ipsum. Aliquam erat volutpat. Duis iaculis tempus mi sed venenatis. 
               Duis auctor odio nunc, vel iaculis quam fringilla quis. Donec convallis eu ex iaculis accumsan. Praesent aliquet ac dolor id tempor.
               Vestibulum velit neque, feugiat rhoncus tincidunt eu, sodales sit amet neque.
            </p>
            <p>Duis cursus elementum eros, eleifend efficitur sapien euismod nec. Nulla imperdiet eros sagittis, gravida nisl lacinia, venenatis orci. 
               Suspendisse risus ex, commodo vitae felis id, iaculis scelerisque ipsum. Aliquam erat volutpat. Duis iaculis tempus mi sed venenatis. 
               Duis auctor odio nunc, vel iaculis quam fringilla quis. Donec convallis eu ex iaculis accumsan. Praesent aliquet ac dolor id tempor.
               Vestibulum velit neque, feugiat rhoncus tincidunt eu, sodales sit amet neque.
            </p>
          </div>
       </div>
    </main>
  )
}

export default Nosotros
