import React from 'react'
import { useQueries, useQuery } from 'react-query'
import Person from './Person';
import Planet from './Planet';

const fetchPlanets = async() => {
    const res = await fetch('https://swapi.dev/api/people');
    return res.json();
}

function People() {
  const {isLoading, isError, data, error , status} = useQuery('people' , fetchPlanets , {
    staleTime:0,
    // cacheTime:10
  });

  console.log(data)
  console.log(status)
  let content
  if (isLoading) {
      content = <p>Loading...</p>
  } else if (isError) {
      content = <p>{error.message}</p>
  } else {
      content = data.results.map((person) => <Person person={person} />)  
  }
  return (
    <div>
        <h2>people</h2>
        {content}
    </div>
  )
}

export default People