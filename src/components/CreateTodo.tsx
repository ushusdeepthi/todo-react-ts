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
        inputRef.current!.value=""
    }
    return (
        <div>
        <h1>Create Todo</h1>
        <form className="form-control"onSubmit={handleSubmit}>
            <input type="text" placeholder="Add todo here" ref={inputRef} />
            <input type="submit" value="Add Todo" className="btn" />
        </form>
        </div>
    )
}

export default CreateTodo
