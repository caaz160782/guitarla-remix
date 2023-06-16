
export async function getGuitarra(url){
  const urlApi =`${process.env.API_URL_STRAPI}/guitarras?filters[url]=${url}&populate=imagen`;
  const respuesta= await fetch(urlApi);
  return await respuesta.json();       
} 

export async function getGuitarras(){
    const respuesta= await fetch(`${process.env.API_URL_STRAPI}/guitarras/?populate=imagen`);
    return await respuesta.json();       
  }

