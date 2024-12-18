"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: { isCompleted: true },
  });

  revalidatePath("/todos");
};

export const newTodo = async (formData: FormData) => {
  await db.todo.create({
    data: { content: formData.get("content") as string },
  });

  revalidatePath("/todos");
};
