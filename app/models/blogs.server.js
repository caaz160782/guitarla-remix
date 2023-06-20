

export async function getPost(url){
    const urlApi =`${process.env.API_URL_STRAPI}/posts?filters[url]=${url}&populate=imagen`;
    const respuesta= await fetch(urlApi);
    return await respuesta.json();       
  } 

export async function getPosts(){
    const respuesta= await fetch(`${process.env.API_URL_STRAPI}/posts/?populate=imagen`);
    return await respuesta.json();       
  }

