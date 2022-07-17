import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog Blog Blog" />
        <link rel="icon" href="/bloglogo.png" />

        {/* Bootsrap 5 Link */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </Head>

        <NavBar/> 
           <hr/>
           <main>
              {children}
           </main>
           <hr/>
        <Footer/>
    </div>
  )
}

export default Layout
