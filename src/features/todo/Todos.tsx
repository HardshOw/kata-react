import React from 'react';
import { Todo } from './todo'
import { addTodo, deleteTodo, updateTodo } from './todoSlice'

export const Todos: React.FC<TodosProps> = ({todos}) => {
  return(
    <React.Fragment>
      {
        todos.map((item: ITodo) => {
          return(
            <Todo {...item} key={item.id}/>
          )
        })
      }
    </React.Fragment>
  )
};