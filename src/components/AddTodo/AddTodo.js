import { useContext, useState } from "react";
import { AllTodo, Them } from "../../App";

function AddTodoBox(){
    let [themToggles] = useContext(Them);
    let [allTodo , setAllTodo] = useContext(AllTodo);
    let [todoText , setTodoText] = useState("");

    const createTodo = (e) => {
        e.preventDefault(); 
        if (todoText.trim()) {
            setAllTodo([...allTodo, { id: allTodo.length + 1, text: todoText ,status : false }]);
            setTodoText("");
        }
    }

    return(
       <div className={`container sm:w-[95%] my-5 p-5 rounded-lg bg-mainLightColor dark:bg-mainDarkColor hover:bg-subLightColor dark:hover:bg-subLightColor ${themToggles === "light" ? "light-shadow" : "dark-shadow"} transition-nav`}>
        <h2 className="text-center text-5xl mb-5">Add Your Todo</h2>
        <form className="w-full flex flex-col items-center gap-5">
            <input value={todoText} onChange={(ev)=>setTodoText(ev.target.value)} className="p-5 w-full rounded-lg border-0 outline-none max-w-[400px]" type="text" placeholder="todo" />
            <button onClick={createTodo} className={`p-5 text-textColor rounded-lg  bg-mainLightColor dark:bg-mainDarkColor " type="button ${themToggles === "light" ? "light-shadow" : "dark-shadow"}`}>Add todo</button>
        </form>
       </div>
    );
}

export default AddTodoBox