import React from 'react'

interface IListTodosP {
    todos: string[];
    handleDone: (task: string) => void;
}

export const ListTodos = ({todos, handleDone}: IListTodosP) => {
  return (
    <ol className="task-list">
                {
                    todos?.map((todo: string) => {
                        return( 
                            <li>
                            {todo}
                            <button onClick={() => handleDone(todo) }>
                                 done</button>
                        </li>
                       
                        )
                    })
                }
            </ol>
  )
}
