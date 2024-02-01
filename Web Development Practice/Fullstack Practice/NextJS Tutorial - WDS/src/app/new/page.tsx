import Link from "next/link";

async function createTodo(data: FormData){
    'use server'

    console.log('Hi')
}

export default function Page(){
    return <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className="text-3xl">New</h1>
    </header>
    <form action={createTodo} className="flex gap-2 flex-col">
        <input type="text" name="title" className=" text-3xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" />
        <div className="flex gap-1 justify-end">
            <Link className=" text-3xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href={'..'}>Cancel</Link>
            <button type="submit" className=" text-3xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Create</button>
        </div>
    </form>
    </>
}