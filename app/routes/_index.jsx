import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/blogs.server";
import { getCurso } from "~/models/curso.server";
import ListadoGuitarras from "~/components/listadoGuitarras";
import ListadoPosts from "~/components/listadoPosts";
import Curso from "../components/curso";
import Stylesguitarras from '~/styles/guitarras.css'
import StylesPost from '~/styles/posts.css'
import StylesCurso from '~/styles/curso.css'


export function meta() {
  return(
    [
    {    
    title:'GuitraLA - Inicio',
    description:'Index'
    }]
  )
}

export function links() {
  return [
    { 
        rel:'stylesheet',
        href:Stylesguitarras
     },
     { 
      rel:'stylesheet',
      href:StylesPost
     },
     { 
      rel:'stylesheet',
      href:StylesCurso
     },
  ];
}    

export async function loader(){
  const [guitarras,posts,curso] = await Promise.all([
                      getGuitarras(),
                      getPosts(),
                      getCurso()
                    ])
  
  
  
  return {guitarras:guitarras.data,
          posts:posts.data,
          curso:curso.data
        }
}


const Index = () => {
  const {guitarras,
         posts,
         curso
        } =useLoaderData();
  
  return (
    <>
     <main className="contenedor"> 
     <ListadoGuitarras  
        guitarras={guitarras}
      />      
     </main>
     <Curso curso={curso?.attributes}/>
     <section className="contenedor">
        <ListadoPosts 
        posts={posts}
        />
     </section>
    </>
   )
  }

export default Index
