import React, { createRef } from 'react';
import { Todos } from '../../features/todo/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList } from '../../features/todo/todoSlice'
import './index.css';
import { addTodo } from '../../features/todo/todoSlice'
import uniqid from 'uniqid';

const Home = () => {
  const dispatch = useDispatch();
  const contentInputRef = createRef<HTMLInputElement>();

  function handleEnter(e: any) {
    if(e.keyCode === 13){
      newTodo()
    }
  }

  function newTodo() {
    if (contentInputRef && contentInputRef.current) {
      dispatch(addTodo({id: uniqid(), content: contentInputRef.current.value, checked: false}))
      console.log('TODOS', currentList.todos)
    }
  }

  let currentList = useSelector(selectTodoList);
  return (
    <div className="home max-w-lg m-auto rounded overflow-hidden shadow-lg p-8">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input ref={contentInputRef} onKeyDown={handleEnter} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ajoutez une nouvelle tâche ..." aria-label="Full name"/>
      </div>
      <Todos todos={currentList.todos} />
    </div>
  );
}

export default Home;
