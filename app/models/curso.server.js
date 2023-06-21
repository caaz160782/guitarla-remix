export async function getCurso(){
    const respuesta= await fetch(`${process.env.API_URL_STRAPI}/curso/?populate=imagen`);
    return await respuesta.json();       
  }
