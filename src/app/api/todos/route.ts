"use server"

import { prisma } from "@/db";
import { NextResponse } from "next/server";

// Because we're inside app folder we can call server code from components
export async function GET() {
  const todos = await prisma.todo.findMany();

  return NextResponse.json({todos: todos});
}

export async function toggleTodo(id: string, complete: boolean) {
    "use server"
  
    await prisma.todo.update({
      where: { id },
      data: { complete }
    })


}
  
export async function deleteTodo(id: string): Promise<string> {
  
    await prisma.todo.delete({
      where: { id }
    })

    return "deleted"
}