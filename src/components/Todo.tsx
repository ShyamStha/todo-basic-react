import React, { useState } from 'react'
import { ListTodos } from './ListTodos'

export const TODO = () => {

    const [task, setTask] = useState("")

    const [todos, setTodos] = useState<string[]>([])

    const [completed, setCompleted] = useState<string[]>([])

    const handleChange = (event: any) => {
        console.log("Checking events", event.target.value)
        setTask(event.target.value)
    }

    const handleAdd = () => {
        if(!task) return
        setTodos([...todos, task])
        setTask("")
    }

    const handleDone =(task: string) => {

        const doneIndex = todos.indexOf(task)

        if( doneIndex == -1) return

        const tempTodos =  todos

        tempTodos.splice(doneIndex, 1)

        setTodos(tempTodos)
        setCompleted([...completed, task])

    }


  return (
    <div className='todo-container'>
        <div className='centered-container'>
            <div className='text-container'>
                <input
                    value={task}
                    onChange={handleChange}
                    placeholder='Enter your task'
                />
                <button onClick={handleAdd}> ADD</button>
            </div>
            <div className="tasks-container">
            <h4> Task</h4>
            <ListTodos todos={todos} handleDone={handleDone}/>
            </div>
            <div className="tasks-container">
            <h4> Completed</h4>
            <ol className="task-list">
                {
                    completed.map((task: string) => {
                        return( <li>{task}</li>)
                    })
                }
            </ol>
            </div>
        </div>
    </div>
  )
}
