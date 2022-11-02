import React, { useState } from 'react';
import { useQuery , useMutation , useQueryClient } from 'react-query'
import { addTodo, deleteTodo, getTodos, updateTodo } from '../../api/todosAPI';

function TodosList() {
    const [newTodo, setNewTodo] = useState('');
    const queryClient = useQueryClient();

    const {
        isLoading,
        isError,
        error,
        data: todos
    } = useQuery('todos' , getTodos , {
        select: data => data.sort((a, b) => b.id - a.id)
    })

    const addTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("todos")
        }
    })

    const updateTodoMutation = useMutation(updateTodo, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("todos")
        }
    })
 
    const deleteTodoMutation = useMutation(deleteTodo, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("todos")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodoMutation.mutate({
            userId: 1,
            title: newTodo,
            completed: false,
            id: 201
        });

        setNewTodo('')
    }

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = todos.map((todo) => {
            return (
                <article key={todo.id}>
                    <div className="todo">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            id={todo.id}
                            onChange={() =>
                                updateTodoMutation.mutate({ ...todo, completed: !todo.completed })
                            }
                        />
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </div>
                    <button className="trash" onClick={() => deleteTodoMutation.mutate({ id: todo.id })}>
                        delete
                    </button>
                </article>
            )
        })
    }


    const newItemSection = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
               supmit
            </button>
        </form>
    )
    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}

export default TodosList