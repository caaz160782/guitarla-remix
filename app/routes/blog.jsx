import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/blogs.server";
import Post from "~/components/post"
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
    <div className="contenedor">
    <h2 className="heading">Blog</h2>
     <div className="blog">
     {
            posts?.map(post =>(
                <Post
                  key={post?.id}
                  post={post?.attributes}
                />
            ))
          }

    
    </div>    
  </div>
  )
}

export default Blog
