import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/blogs.server";
import ListadoPosts from "../components/listadoPosts";
import PostStyles from '~/styles/posts.css'


export async function loader(){
  const posts= await getPosts();

  return posts.data
 
}

export function links() {
  return [
    { 
        rel:'stylesheet',
        href:PostStyles
     },
  ];
}    


const Blog = () => {
  const posts =useLoaderData();
  return (
    <main className="contenedor">
    <ListadoPosts 
     posts={posts}
    />
  </main>
  )
}

export default Blog
