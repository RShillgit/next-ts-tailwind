"use server"
import { prisma } from "./db";

// Because we're inside app folder we can call server code from components
export async function getTodos() {
    return prisma.todo.findMany();
}
  
export async function toggleTodo(id: string, complete: boolean) {
    "use server"
  
    await prisma.todo.update({
      where: { id },
      data: { complete }
    })
}
  
export async function deleteTodo(id: string) {
    "use server"
  
    await prisma.todo.delete({
      where: { id }
    })

    return getTodos();
}