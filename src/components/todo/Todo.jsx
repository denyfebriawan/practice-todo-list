import './todo.css'

const Todo = ({todo, onEditHandler, onDeleteHandler}) => {

       return (
         <div className='todo-container'>
            <div>
              <h2 className="todo-title">{todo.title}</h2>
              <div>{todo.body}</div>
            </div>
            <div className="button-set">
              <button
              className="todo-delete-button button"
               onClick={() => {onDeleteHandler(todo.id)}}
               >delete
               </button>
               <button 
               className="todo-complete-button button"
               onClick={() => onEditHandler(todo.id)}
               >
                { todo.isDone ? "Cancel" : "Done"}
               </button>
            </div>

         </div>
       );
}

export default Todo;