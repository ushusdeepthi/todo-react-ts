import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = ()=>{
  const todos = [{id:1,text:'Finish the course'}]
  return <>
          <TodoList items={todos}/>
          </>
}


export default App;
