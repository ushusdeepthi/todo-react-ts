import React from 'react'

interface TodoListProps{
    items: {id: number, text: string}[];
};
const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
           {props.items.map(todo => {
              return <li key={todo.id}>
                   {todo.text}
               </li>
           })}
        </ul>
    )
}

export default TodoList;