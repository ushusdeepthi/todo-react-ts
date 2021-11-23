import React,{ useRef } from 'react'

type CreateTodoProps ={                // we can either use type or interface
    onAddTodo:(todoText:string) => void;
}
const CreateTodo:React.FC<CreateTodoProps> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
        const enteredText = inputRef.current!.value; 
        console.log(enteredText)
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add todo here" ref={inputRef} />
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default CreateTodo
