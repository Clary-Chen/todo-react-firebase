import React, { useEffect, useState, useContext } from 'react'
import db from '../js/Firebase'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  // GET > 設todos
  useEffect(() => {
    db.collection('todos').orderBy("timestamp","desc").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          timestamp: doc.data().timestamp
        }))
      )
    })
  }, [])

  console.log('todos:', todos)
  return <AppContext.Provider value={{todos,setTodos}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
