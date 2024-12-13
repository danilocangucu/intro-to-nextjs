type Todo = {
    id: string;
    content: string;
};

const Todo = ({ todo }: { todo: Todo }) => {
    return <div>{todo.content}</div>
}

export default Todo;