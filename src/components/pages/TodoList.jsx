import { useState } from "react"
import Layout from "../layout/Layout";
import Form from "../form/Form";
import List from "../list/List";

const TodoList = () => {
    const[todos, setTodos] = useState([
        
    ]);

    return (
        <Layout>
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    )
}

export default TodoList;