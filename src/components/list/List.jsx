import React from "react";
import Todo from "../todo/Todo";
import "./list.css";

const List = ({todos, setTodos}) => {
  // function onEditHandler() {

  //   const doneState = todos.map(obj =>{
  //      if (obj.id === todo.id) {
  //        console.log(obj.id === todo.id)
  //        return {...obj, isDone:true}
  //      } 

  //      return obj;
  //    })


  //    const cancelState =  todo.map(obj =>{
  //      if (obj.id === todo.id) {
         
  //        return {...obj, isDone:false}
  //      } 

  //      return obj;
  //    })
   

  //    if (todo.isDone === false) {
  //      setTodos(doneState);
  //    } else {
  //      setTodos(cancelState);
  //    }  
  //  }

  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

    return (
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                    return (
                            <Todo 
                            todo = {todo}
                            setTodos = {setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                            key={`todo-${todo.id}`}
                            />
                         );
                            }else {
                                return null;
                            }
                    })}
            </div>
            <h2 className="list-title">Done..! 🎉</h2>
            <div className="list-wrapper">
                 {todos.map((todo) => {
                    if (todo.isDone === true) {
                    return (
                        <Todo 
                        todo = {todo}
                        setTodos = {setTodos}  
                        onDeleteHandler={onDeleteHandler}
                        onEditHandler={onEditHandler}
                        key={`todo-${todo.id}`}/>
                    );
                    } else {
                      return null;
                    }
                })}
            </div>
        </div>
    );
}

export default List