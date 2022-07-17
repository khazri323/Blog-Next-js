import React from 'react'

//API
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

  const data = await res.json();

  return{
     props : { posts : data},          
  };
};

const Blog = ({posts}) => {
  return (
    <div>
      <h1>Blog Page</h1>
      <hr/>
      {
        posts.map((post)=>(
      
        <div> 
           <hr/>

           <div key={ post.id}>
            <h3> {post.title} </h3>
            <p> {post.body} </p>
           </div>
           <a href={`/blog/${post.id}`}>Plus Détails</a>
           <hr/>
        </div>
      
        ))
      }
     
    </div>
  )
}

export default Blog
