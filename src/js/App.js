import React from 'react'
import '../css/App.css'
import Header from './Header'
import Todo from './Todo'
import { useGlobalContext } from './context'

const App = () => {
    const { todos } = useGlobalContext()

    return (
        <div className="app">
            {/* app-header */}
            <Header/>
            {/* app-body */}
            {todos.map(todo => <Todo key={todo.id} {...todo} id={todo.id}/> )}
        </div>
    )
}

export default App
