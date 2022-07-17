import React from 'react'

//`https://unsplash.com/photos/FHnnjk1Yj7Y/?${post.id}`

//API Nombre des paths
export const  getStaticPaths = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

  const data = await res.json();

  const paths= data.map(post => 
    {
      return{
        params : {id : post.id.toString() },
      }
    }
  )

  return {
    paths , fallback:false
  }
}

//API
//API
export const getStaticProps = async (context) => {

  const id = context.params.id;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

  const data = await res.json();

  return{
     props : { post : data},          
  };
};




const Post = ({post}) => {
  return (
    <div >
      <h1>Plus Détails Post {post.id} </h1>
      <hr/>
      <h3> {post.title} </h3>
      <p> {post.body} </p>
    </div>
  )
}

export default Post
