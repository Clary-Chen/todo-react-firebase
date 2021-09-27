import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'
import { Input } from '@material-ui/core'

import React, { useState } from 'react'
import '../css/Todo.css'
import db from '../js/Firebase'
import firebase from 'firebase'
import { Modal } from '@material-ui/core'

const Todo = ({todo,timestamp,id}) => {
    const [input, setInput] = useState('')
    const [open, setOpen] = useState(false)

    // DELETE
    const deleteTodo = ()=>{
        db.collection("todos").doc(id).delete()
    }
    // EDIT
    const editTodo = ()=>{
      if (input === '') {
        return
      }
        db.collection('todos').doc(id).update({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
        setOpen(false)
    }

    return (
      <div className='todo'>
        <div className='todo_body'>
          <span className='todo_text'>{todo}</span>
          {/* 編輯 & 刪除按鈕 */}
          <div className='todo_buttonBox'>
            <EditIcon onClick={(e) => setOpen(true)} />
            <DeleteIcon onClick={deleteTodo} />
          </div>
          {/* 編輯視窗 */}
          <Modal
            className='todo_modal'
            open={open}
            onClose={(e) => setOpen(false)}
          >
            <div className='todo_modal__center'>
              {/* 輸入編輯內容 */}
              <Input
                placeholder={todo}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <DoneIcon
                disabled={input === ''}
                fontSize='large'
                type='button'
                onClick={editTodo}
              />
            </div>
          </Modal>
        </div>
        <span className='todo_time'>
          {new Date(timestamp?.toDate()).toUTCString()}
        </span>
      </div>
    )
}

export default Todo
