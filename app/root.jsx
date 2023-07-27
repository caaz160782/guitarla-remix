import {Meta, 
        Links,
        Outlet,
        Scripts,
        LiveReload,
        useRouteError,
        isRouteErrorResponse,
        
       } from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header';
import Footer from '~/components/footer';
import { useState,useEffect } from 'react';

export function meta() {
      return [
        { charset: "utf-8" },
        { title: "GuitarLA - Remix" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
      ];
    }

export function links() {
      return [
        { 
            rel:'stylesheet',
            href:"https://necolas.github.io/normalize.css/8.0.1/normalize.css"
         },
        { 
          rel:'stylesheet',
          href: styles
        },
        {
         rel:'preconnect',   
         href:"https://fonts.googleapis.com"   
        },
        {
            rel:'preconnect',   
            href:"https://fonts.gstatic.com",
            crossOrigin:"true"   
         },
         {
            rel:'stylesheet',   
            href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",            
         }
      ];
    }    

export default function App(){
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? []:null;
    const [carrito,setCarrito]=useState(carritoLS)

    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(carrito))

    }    
    ,[carrito])

    const agregarCarrito=(guitarra) =>{
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            const carritoActualizado = carrito.map(guitarraState =>{
                if(guitarraState.id === guitarra.id){
                   // guitarraState.cantidad += guitarra.cantidad
                   guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        }else{
        setCarrito([...carrito,guitarra]);
        }
    }   

    const actualizarCantidad =(guitarra) =>{ 
        const carritoActualizado=carrito.map(guitarraState =>{
            if( guitarraState.id === guitarra.id){
                guitarraState.cantidad =guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra=id=>{
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet  
            context={{
                agregarCarrito,
                carrito,
                actualizarCantidad,
                eliminarGuitarra
            }}
            />
        </Document>
    )
}

const Document =({children})=>{
    return(
        <html lang="es">
            <head>
               <Meta/>
               <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}
/**manejo d eerrores */
export function ErrorBoundary() {
    const error = useRouteError();
    // when true, this is what used to go to `CatchBoundary`
    if (isRouteErrorResponse(error)) {
    //   return (
    //     <div>
    //       <h1>Oops</h1>
    //       <p>Status: {error.status}</p>
    //       <p>{error.statusText}</p>
    //     </div>
    //   );
    return (
        <Document>
            {/* de esta manera imprimimos los errores */}
            <p className="error">{error.status} {error.statusText} </p>         
        </Document>
        )
    }
  
    // Don't forget to typecheck with your own logic.
    // Any value can be thrown, not just errors!
    let errorMessage = "Unknown error";
    
  
    return (
    //   <div>
    //     <h1>Uh oh ...</h1>
    //     <p>Something went wrong.</p>
    //     <pre>{errorMessage}</pre>
    //   </div>
    <Document>
            {/* de esta manera imprimimos los errores */}
            <p className="error">{errorMessage} </p>         
        </Document>
    );
  }