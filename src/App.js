import React from 'react';

import TodoList from './components/pages/TodoList'





const App = () => {
  // const [buttonText, setButtonText] = useState('Done!');

  // const Square = ({todo}) =>{
    
    
  //   function handleClick() {

  //    const doneState = todos.map(obj =>{
  //       if (obj.id === todo.id) {
  //         setButtonText('Done!')
  //         return {...obj, isDone:true}
  //       } 

  //       return obj;
  //     })

  //     const cancelState =  todos.map(obj =>{
  //       if (obj.id === todo.id) {
  //         setButtonText('Cancel!')
  //         return {...obj, isDone:false}
  //       } 

  //       return obj;
  //     })
    

  //     if (todo.isDone === false) {
  //       setTodo(doneState);
  //     } else {
  //       setTodo(cancelState);
  //     }
     
  //   }

  //   const removeHandle = () => {
  //    todos.map(obj => {
  //     setTodo((current) =>
  //     current.filter((obj) => obj.id !== todo.id)
  //       )
       
  //    })

     
  //   }
  
  //   return (
  //     <div className='square-style'>
       
  //       {todo.title}
  //       {todo.id}
  //       {todo.context}
  //       <button onClick={removeHandle}>delete</button>
  //       <button onClick={handleClick}>{buttonText}</button>
        
  //     </div>
  //   );
  // };

  // const [todos, setTodo] = useState([]);

  // let [newTodo, setNewTodo] = useState('');
  // let [newContext, setNewContext] = useState('');

  // const handleChange = (event) => {
  //   setNewTodo(event.target.value);
   
  // };

  // const handleContext = (event) => {
  //   setNewContext(event.target.value);
  // };

  // const addNewTodo = () => {
  //   setTodo([...todos, {id: todos.length, context:newContext, title:newTodo, isDone:false}]);
  //   setNewTodo(newTodo = '')
  //   setNewContext(newContext= '')
  // };

  // return (
      
  //     <div>
  //       <Header />
        
  //       <div className='container-form'>
  //         <label className='input-label'>Title :</label>
  //         <input className='input-box' value={newTodo}  onChange={handleChange}/>

  //         <label className='input-label'>Context :</label>
  //         <input className='input-box' value={newContext} onChange={handleContext} />
          
  //         <button className='input-button' onClick={addNewTodo}>Add new to do</button>
  //       </div>
        
  //       <Layout />

  //       <div className='list-container'>
  //         <h1>Working</h1>
  //         {todos.map((todo) => {
  //           if (todo.isDone === false) {
  //             return (
  //               <Square 
  //                 todo = {todo}
  //                 key={`todo-${todo.id}`}/>
  //             );
  //           }
  //         })}
  //       </div>

  //       <div>
  //         <h1>Done</h1>
  //         {todos.map((todo) => {
  //           if (todo.isDone === true) {
  //             return (
  //               <Square 
  //                 todo = {todo}
  //                 key={`todo-${todo.id}`}/>
  //             );
  //           }
  //         })}
  //       </div>
  //     </div>
  // );
  return <TodoList />
}

export default App;