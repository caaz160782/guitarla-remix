import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/blogs.server";
import { formatearFecha } from "~/utils/helpers";
import PostStyles from '~/styles/posts.css'


export async function loader({params}){
  const  {postUrl}= params;
  const post= await getPost(postUrl); 
  
  if(post.data.length ===0){
    throw new Response('',{
      status:404,
      statusText:'Post no encontrada'
    })
  }
  return post.data  
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
    title:`GuitraLA - ${data[0]?.attributes.titulo}`,
    description:`Descripcion de ${data[0]?.attributes.titulo}`
    }]
  )
}

export function links() {
  return [
    { 
        rel:'stylesheet',
        href:PostStyles
     },
  ];
}    



const Post = () => {
    
    const post =useLoaderData();    

    const {titulo,contenido,imagen,publishedAt }=post[0]?.attributes;
   
    
    return (
      <main className="post1">
      <img src={imagen.data.attributes.url} alt={`imagen_${titulo}`} />
      <div className="contenido">        
        <h3>{titulo}</h3>  
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>        
      </div>
    </main>
    )
  }
  
  export default Post
  