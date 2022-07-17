import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavBar = () => {

  const router = useRouter()

  console.log(router)


  return (
    <header>
      <Link href="#">
        <a>
          <img src="/bloglogo.png" alt="Logo Blog"/>
        </a>
      </Link>

      <Link href="/">
        <a className={ `${ router.pathname === "/" ? "active" : ''}`} >Home</a>
      </Link>

      <Link href="/about">
        <a className= { `${ router.pathname === "/about" ? "active" : ''}`}  >About</a>
      </Link>

      <Link href="blog">
        <a className={ `${ router.pathname === "/blog" ? "active" : ''}`}  >Blog</a> 
      </Link>
    </header>
  )
}

export default NavBar
