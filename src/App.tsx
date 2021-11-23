import React from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

const App: React.FC = ()=>{
  const todos = [{id:1,text:'Finish the course'}]
  const todoHandler = (text:string)=>{
    console.log(text)
  }
  return <>
          <CreateTodo onAddTodo={todoHandler} />
          <TodoList items={todos}/>
          </>
}


export default App;
