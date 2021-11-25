import React from 'react'

interface TodoListProps{
    items: {id: number, text: string}[];
    deleteTodo:(id:number)=>void;
};
const TodoList: React.FC<TodoListProps> = (props) => {


    return (<>
            <div className="list">
            <h1>Todo</h1>
           {props.items.map(todo => {
              return <div key={todo.id} className="item">
                  <p className="text">{todo.text}</p> 
                  <p className="btn-delete"onClick={props.deleteTodo.bind(null,todo.id)}> DELETE </p>
               </div>
           })}
        </div>
        </>
    )
}

export default TodoList;