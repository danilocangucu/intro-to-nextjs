import TodoList from "@/components/TodoList";
import db from "@/utils/db";

type Todo = {
    id: string;
    content: string;
    isCompleted: boolean;
};

const getData = async () => {
    // await new Promise((_resolve, reject) => setTimeout(() => reject(), 2000));
    return await db.todo.findMany({});
}

const TodosPage = async () => {
    const todos = await getData() as Todo[];
    // console.log(todos);
    return <div>
        <TodoList todos={todos} />
    </div>
}

export default TodosPage;