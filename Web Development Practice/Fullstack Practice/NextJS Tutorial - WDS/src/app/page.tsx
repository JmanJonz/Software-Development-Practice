import Link from "next/link"
import { prisma } from "@/db"
import { TodoItem } from "@/components/TodoItem"

// in many ways this function is like an api endpoint 
 function getTodos(){
  return prisma.todo.findMany()
 }


export default async function Home(){
  const todos = await getTodos()
  

  return(
    <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className="text-3xl">Todos</h1>
      <Link className=" text-3xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href={'/new'}>New</Link>
    </header>
    <ul>
      {todos.map(todo =>{
        return <TodoItem key={todo.id} {...todo}/>
      })}
    </ul>
    </>
  )
}