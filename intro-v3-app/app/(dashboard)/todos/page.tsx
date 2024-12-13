import TodoList from "@/components/TodoList";
import db from "@/utils/db";

type Todo = {
    id: string;
    content: string;
};

const getData = async () => {
    return await db.todo.findMany({});
}

const TodosPage = async () => {
    const todos = await getData() as Todo[];
    console.log(todos);
    return <div>
        <TodoList todos={todos} />
    </div>
}

export default TodosPage;