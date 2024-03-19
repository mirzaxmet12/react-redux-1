import React from 'react'
import { addText, addTodo, removeTodo, removeDone, toggleTodoCompleted } from './store/TodoSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Radio } from '@mui/material';
import './App.css'

interface listTodo {
  id: string,
  text: string,
  completed: boolean,
}
function App() {
  const todos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch()
  const pending: listTodo[] = []
  const done: listTodo[] = []
  function filterTodos() {
    todos.map((todo: listTodo) => {
      if (!todo.completed) pending.push(todo)
      if (todo.completed) done.push(todo)
    })
  }
  filterTodos()
  console.log(pending);
  console.log(todos);
  function handleChangeTodo(id: string, event: React.ChangeEvent<HTMLInputElement>) {
    const value: string = event.target.value;
    dispatch(addText({ id, text: value }))
  }

  return (
    <div className='block'>
      <div className="pending">
        <div className="title">
          <span>ЗАДАЧА</span>
          <button id='addTodo' onClick={() => dispatch(addTodo())}>Новая</button>
        </div>
        <ul>
          {pending.map((todo: listTodo) => (
            <li className='list' key={todo.id}><Radio color="primary" size="small" onClick={() => dispatch(toggleTodoCompleted({ id: todo.id }))} />
              <input type="text" id="" value={todo.text} onChange={(e) => handleChangeTodo(todo.id, e)} />
              <button id='delete' onClick={() => dispatch(removeTodo({ id: todo.id }))}>&times;</button>
            </li>
          ))}

        </ul>
      </div>
      {done.length>0 && <div className="done">
        <div className="title">
          <span>ВЫПОЛНЕНО</span>
          <button id='clear' onClick={() => dispatch(removeDone())}>Очистить</button>
        </div>
        <ul>
          {done.map((todo: listTodo) => (
            <li className='list' key={todo.id}><Radio color="primary" size="small" defaultChecked={todo.completed} onClick={() => dispatch(toggleTodoCompleted({ id: todo.id }))} />
              <input type="text" id="" value={todo.text} onChange={(e) => handleChangeTodo(todo.id, e)} />
              <button id='delete' onClick={() => dispatch(removeTodo({ id: todo.id }))}>&times;</button>
            </li>
          ))}

        </ul>
      </div>}
    </div>
  )
}

export default App
