import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar'
import People from './People';
import Planuts from './Planuts';

function Home() {
    const [page, setPage] = useState('planets');

  return (
    <div className='App'>
        <h1>
            stars wars info
        </h1>
        <Navbar setPage={setPage}/>
        <div className='content'>
        { page === 'planets' ? <Planuts /> : <People /> }
        </div>
    </div>
  )
}

export default Home