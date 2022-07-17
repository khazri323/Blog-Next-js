import React , {useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'


const Error = () => {

  const router = useRouter()

  useEffect ( () => {
   
    setTimeout(() => {
      router.push("/")
    }, 4000);

  } , [])

  return (
    <div>
      <h1>Error !!! Page Not Found</h1>
      
       <Link  href="/">
        <a>Go To Home</a>
        </Link>
    </div>
  )
}

export default Error
