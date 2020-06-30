import React from 'react';
import { Todos } from '../../features/todo/Todos';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../../features/todo/todoSlice'
import './index.css';

function handleEnter(event: any) {
  if(event.keyCode === 13){
    console.log('event', event)
  }
}

const Home = () => {
  const currentList = useSelector(selectTodoList);
  return (
    <div className="home max-w-lg m-auto rounded overflow-hidden shadow-lg p-8">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input onKeyPress={(event) => handleEnter(event)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ajoutez une nouvelle tâche ..." aria-label="Full name"/>
        </div>
      </form>
      <Todos todos={currentList.todos} />
    </div>
  );
}

export default Home;
