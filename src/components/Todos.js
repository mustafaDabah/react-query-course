import React from 'react'
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async() => {
    const res = await fetch('http://localhost:3500/todos');
    return res.json();
}

const onSuccess = (data , handleTime) => {
    console.log('perform side effect success' , data);
    if(data.length === 200) handleTime(0)
} 
const onError = (error) => console.log('perform side effect error' , error);

function Todos() {
    const [time, setTime] = useState(3000)
    const {isLoading, isError, data, error , status} = useQuery('todos' , fetchPlanets , {
        // staleTime:0,
        // cacheTime:0
        initialData:['name' , 'age'],
        refetchInterval:time, 
        refetchIntervalInBackground:false, // focus refetch 
        onSuccess:(data) => {
            console.log('perform side effect success' , data);
            if(data.length === 200) return setTime(0)
        },
        onError:onError
      });
    
    //   console.log(data)
    //   console.log(status)
      let content
      if (isLoading) {
          content = <p>Loading...</p>
      } else if (isError) {
          content = <p>{error.message}</p>
      } else {
          content = data.map((person) => <h2>{person.title}</h2>)  
      }
      return (
        <div>
            <h2>people</h2>
            {content}
        </div>
      )
}

export default Todos