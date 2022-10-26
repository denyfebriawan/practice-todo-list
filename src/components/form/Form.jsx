import { useState } from 'react';
import './form.css'

const Form = ({setTodos, todos}) => {

    let [newTodo, setNewTodo] = useState('');
    let [newContext, setNewContext] = useState('');

    

    const handleTitle = (event) => {
        setNewTodo(event.target.value);
        
    };

    const handleContext = (event) => {
        setNewContext(event.target.value);
    };
    
    const addNewTodo = () => {
        setTodos([...todos, {id: todos.length, body:newContext, title:newTodo, isDone:false}]);
       
        setNewTodo(newTodo = '')
        setNewContext(newContext= '')
      };


    return (
        <div className='container-form'>

            <label className='input-label'>Title :</label>
            <input className='input-box' value={newTodo} onChange={handleTitle}/>

            <label className='input-label'>Context :</label>
            <input className='input-box' value={newContext} onChange={handleContext}/>

            <button className='input-button' onClick={addNewTodo}>Add</button>
        </div>
    );
}

export default Form;