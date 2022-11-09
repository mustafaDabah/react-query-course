import React from 'react'
import { useQuery } from 'react-query';

function useTodos(name , fetch , objectOptions) {
    const {isLoading, isError, data, error , status} = useQuery(name , fetch , objectOptions);
    
    return {isLoading, isError, data, error , status}
}

export default useTodos