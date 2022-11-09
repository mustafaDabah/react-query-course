import React from 'react'
import { useQueries, useQuery } from 'react-query'
import Planet from './Planet';

const fetchPlanets = async({queryKey }) => {
    console.log(queryKey )
    const res = await fetch('https://swapi.dev/api/planets');
    return res.json();
}

function Planuts() {
    const greeting = 'hello, mustafa'
  const {isLoading, isError, data, error , status} = useQuery(['planets' , {greeting}] ,  fetchPlanets , {
    staleTime:0,
    // cacheTime:10
    refetchOnWindowFocus: false
  });

  console.log(data)
  console.log(status)
  let content
  if (isLoading) {
      content = <p>Loading...</p>
  } else if (isError) {
      content = <p>{error.message}</p>
  } else {
      content = data.results.map((planet) => <Planet planet={planet} />)  
  }
  return (
    <div>
        <h2>pl</h2>
        {content}
    </div>
  )
}

export default Planuts