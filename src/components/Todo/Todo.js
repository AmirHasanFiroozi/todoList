import { useContext, useRef, useState, useEffect } from "react";
import { AllTodo, Them } from "../../App";

function Todo() {
  const [themToggles] = useContext(Them);
  const [allTodo, setAllTodo] = useContext(AllTodo);
  const [updateMode, setUpdateMode] = useState({});
  const [newValue, setNewValue] = useState({});
  const input = useRef(null);

  const deleteTodo = (id) => {
    setAllTodo(allTodo.filter((todo) => todo.id !== id));
  };

  const doneToggleB = (ev, id) => {
    const todoIndex = allTodo.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      const updatedTodo = [...allTodo];
      updatedTodo[todoIndex].status = ev.target.checked;
      setAllTodo(updatedTodo);
    }
  };

  const toggleUpdateMode = (id) => {
    setUpdateMode((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setNewValue((prev) => ({
      ...prev,
      [id]: allTodo.find((todo) => todo.id === id)?.text || "",
    }));
  };

  const saveUpdatedTodo = (id) => {
    const updatedTodo = allTodo.map((todo) =>
      todo.id === id ? { ...todo, text: newValue[id] } : todo
    );
    setAllTodo(updatedTodo);
    toggleUpdateMode(id);
  };

  // useEffect to focus input only when updateMode is true
  useEffect(() => {
    if (input.current) {
      input.current.focus();
      input.current.select();
    }
  }, [updateMode]);

  return (
    <div
      className={`container flex flex-col gap-5 md:w-[95%] my-5 p-5 rounded-lg bg-mainLightColor dark:bg-mainDarkColor ${
        themToggles === "light" ? "light-shadow" : "dark-shadow"
      } transition-nav`}
    >
      {allTodo.length > 0 ? (
        allTodo.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between sm:flex-col sm:justify-center text-textColor p-5 gap-2 rounded-lg ${
              themToggles === "light" ? "light-shadow" : "dark-shadow"
            } hover:bg-subLightColor dark:hover:bg-subLightColor transition-nav`}
          >
            <span
              className={`text-2xl ${
                todo.status && "font-bold italic line-through text-gray-500"
              }`}
            >
              {updateMode[todo.id] ? (
                <input
                  ref={input}
                  onKeyDown={(ev) => {
                    if (ev.key === "Enter") {
                      ev.preventDefault(); // جلوگیری از رفتار پیش‌فرض
                      saveUpdatedTodo(todo.id); // مستقیم ذخیره کردن
                    }
                  }}
                  onChange={(ev) =>
                    setNewValue((prev) => ({
                      ...prev,
                      [todo.id]: ev.target.value,
                    }))
                  }
                  value={newValue[todo.id] || ""}
                  className="p-3 text-black w-full rounded-lg border-0 outline-none max-w-[400px]"
                  type="text"
                />
              ) : (
                todo.text
              )}
            </span>
            <div className="flex gap-4 items-center">
              <div className="flex gap- items-center cursor-pointer">
                <label htmlFor={`doneCheckBox-${todo.id}`}>Done?</label>
                <input
                  onChange={(ev) => doneToggleB(ev, todo.id)}
                  className="ml-2"
                  type="checkbox"
                  checked={todo.status || false}
                  id={`doneCheckBox-${todo.id}`}
                />
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className={`p-3 rounded-lg bg-mainLightColor dark:bg-mainDarkColor ${
                  themToggles === "light" ? "light-shadow" : "dark-shadow"
                }`}
              >
                Delete
              </button>
              <button
                onClick={() =>
                  updateMode[todo.id]
                    ? saveUpdatedTodo(todo.id)
                    : toggleUpdateMode(todo.id)
                }
                className={`p-3 rounded-lg bg-mainLightColor dark:bg-mainDarkColor ${
                  themToggles === "light" ? "light-shadow" : "dark-shadow"
                }`}
              >
                {updateMode[todo.id] ? "Save" : "Update"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-2xl text-textColor">No todos to display</p>
      )}
    </div>
  );
}

export default Todo;
