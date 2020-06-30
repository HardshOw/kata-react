import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from './todoSlice';

export const Todo: React.FC<ITodo> = (todo) => {
  const dispatch = useDispatch();
  return(
    <div className="item" key={todo.id}>
      <p>
        <input onChange={() => dispatch(toggleTodo({id: todo.id}))} type="checkbox" defaultChecked={todo.checked} />{" "}{todo.content}
        <button onClick={() => dispatch(deleteTodo({id: todo.id}))} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
        Supprimer
        </button>
      </p>

    </div>
  )
}