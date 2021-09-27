import React,{useState} from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox'
import firebase from 'firebase'
import { useGlobalContext } from './context'
import db from '../js/Firebase'
import '../css/Header.css'

function Header() {
    const [input, setInput] = useState('')
    const { todos,setTodos } = useGlobalContext()

  // POST
  const addTodo = (event) => {
    if(input === ''){
      return
    }
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setTodos([...todos, input])
    setInput('')
  }

    console.log('input:', input)
 
  return (
    <div>
      <form className='header'>
        <FormControl>
          <InputLabel>輸入你想做的事...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <AddBoxIcon
          fontSize='large'
          onClick={addTodo}
          type='submit'
        />
      </form>
    </div>
  )
}

export default Header
