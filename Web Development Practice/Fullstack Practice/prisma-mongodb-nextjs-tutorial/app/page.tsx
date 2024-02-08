import { AddTodo } from "./components/shared/AddTodo";
const Home = ()=>{
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">To-Do-App</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">Next.js 14
      <span className="text-orange-700 ml-2">Server Actions</span></h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo/>
      </div>
    </div>
  )
}

export default Home;