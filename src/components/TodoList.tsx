import React from 'react'

interface TodoListProps{
    items: {id: number, text: string}[];
    deleteTodo:(id:number)=>void;
};
const TodoList: React.FC<TodoListProps> = (props) => {


    return (
        <ul>
           {props.items.map(todo => {
              return <li key={todo.id}>
                  <span>{todo.text}</span> 
                  <button onClick={props.deleteTodo.bind(null,todo.id)}> x </button>
               </li>
           })}
        </ul>
    )
}

export default TodoList;