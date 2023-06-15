

export async function getGuitarras(){
    const respuesta= await fetch(`${process.env.API_URL_STRAPI}/guitarras/?populate=imagen`);
    return await respuesta.json();       
  }