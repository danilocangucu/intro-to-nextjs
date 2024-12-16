'use client';

import { useTransition } from "react";

import { completeTodo } from "@/utils/actions";

type Todo = {
    id: string;
    content: string;
    isCompleted: boolean;
};

const Todo = ({ todo }: { todo: Todo }) => {
    const [, startTransition] = useTransition();

    return (
        <div
            className={`border border-white/20 cursor-pointer ${todo.isCompleted ? "line-through text-gray-400" : ""}`}
            onClick={() => { startTransition(() => completeTodo(todo.id)) }}
        >
            {todo.content}
        </div>

    );
}

export default Todo;