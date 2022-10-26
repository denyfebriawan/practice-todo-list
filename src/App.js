import { useState } from 'react';
import './App.css'




const App = () => {
  const [buttonText, setButtonText] = useState('Done!');

  const Square = ({todo}) =>{
    
    
    function handleClick() {

     const doneState = todos.map(obj =>{
        if (obj.id === todo.id) {
          setButtonText('Cancel!')
          return {...obj, isDone:true}
        } 

        return obj;
      })

      const cancelState =  todos.map(obj =>{
        if (obj.id === todo.id) {
          setButtonText('Done!')
          return {...obj, isDone:false}
        } 

        return obj;
      })
    

      if (todo.isDone === false) {
        setTodo(doneState);
      } else {
        setTodo(cancelState);
      }
     
    }
  
    return (
      <div className='square-style'>
       
        {todo.title}
        {todo.id}
        <button>delete</button>
        <button onClick={handleClick}>{buttonText}</button>
        
      </div>
    );
  };

  const [todos, setTodo] = useState([]);

  let [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    setNewTodo(event.target.value);
    console.log(event.target.value);
  };

  const addNewTodo = () => {
    setTodo([...todos, {id: todos.length, title:newTodo, isDone:false}]);
    setNewTodo(newTodo = '')
  };

  return (
      <div>
        <h1>To Do List</h1>

        <input value={newTodo} onChange={handleChange}/>
        <button onClick={addNewTodo}>Add new to do</button>

        <div className='list-container'>
          <h1>WORKING</h1>
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return (
                <Square 
                  todo = {todo}
                  key={`todo-${todo.id}`}/>
              );
            }
          })}
        </div>

        <div>
          <h1>Done</h1>
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return (
                <Square 
                  todo = {todo}
                  key={`todo-${todo.id}`}/>
              );
            }
          })}
        </div>
      </div>
  );
}

export default App;