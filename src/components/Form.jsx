import axios from 'axios';
import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import useNavigate from "react-router-dom";

const Form = ({input, setInput, todos, setTodos,editTodo, setEditTodo}) =>  {

  const navigate = useNavigate()
  //Updating the task
  const updateTodo = (title, id, completed) => {
    const newTodo =  todos.map((todo) => 
    todo.id === id ? {title, id, completed} : todo
    ) ;
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if(editTodo){
       setInput(editTodo.title);
    }else{
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault(); 
    if(!editTodo){
      setTodos([...todos, { id: uuidv4(), title: input, completed: false}]);
      setInput("");
    }else{
      updateTodo(input, editTodo.id, editTodo.completed)
    }
    console.log(todos);
    axios.post('https://localhost:4500/task/', todos)
    .then(res => {
      console.log(res.data);
      navigate('/')
    }).catch(err => {
      console.log({ error: err });
    })

  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
         <input 
           type="text" 
           placeholder='Enter a  Todo.....'  
           className='task-input'
           value={input}
           required
           onChange={onInputChange}
          />
         <button className=' btn btn-success' type='submit'>
            {editTodo ? "Ok" : "Add"}
         </button>
      </form>
    </div>
  )
}

export default Form;