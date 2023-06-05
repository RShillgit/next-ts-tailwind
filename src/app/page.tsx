"use client"

import { TodoItem } from "@/components/TodoItem";
import { deleteTodo, getTodos, toggleTodo } from "@/serverCode";
import Link from "next/link"

export default async function Home() {

  // Fetch todos from DB
  let todos = await getTodos();

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded
          hover:bg-slate-700 focus:bg-slate-700 outline-none" href="/new"
        >
          New
        </Link>
      </header>

      <ul className="pl-4">

        {todos && (
          todos.map(todo => {
            return (<TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)
          })
        )}

      </ul>
    </>
  )
}
