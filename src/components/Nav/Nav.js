import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./Nav.css";
import { useCallback, useContext, useMemo } from "react";
import { Them } from "../../App";

function Nav({changeNavStyle ,scrollY , windowHeight ,addNweTodoRef }) {
  let [themToggles , setThemToggle] = useContext(Them);
  const changeThemHandler = useCallback(() => {
    setThemToggle((prevToggle) => {
      const newToggle = prevToggle === "light" ? "dark" : "light";
      const bodyColor = prevToggle === "light" ? "#2f4156" : "#3e68a3" ;
      
      document.body.classList.remove(prevToggle);
      document.body.classList.add(newToggle);
      document.body.style.backgroundColor = bodyColor ;
  
      return newToggle;
    });
  }, [setThemToggle]);
  const setLeft = useMemo(()=>{
    const documentHeight = document.documentElement.scrollHeight; 
      return ((scrollY / (documentHeight - (windowHeight))) * 100);
  },[scrollY,windowHeight])
  const scrollToAddNewTodo = ()=>{
    addNweTodoRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
    <nav className={`sticky top-0 w-[95%] ${changeNavStyle && 'w-full'} rounded-lg bg-mainLightColorOP dark:bg-mainDarkColorOp dark:text-textColor mx-auto ${themToggles === "light" ? "light-shadow" : "dark-shadow"} z-10`}>
        <div className="container flex items-center justify-between p-3">
          <ul className="p-0 flex items-center justify-center gap-2">
            <li onClick={scrollToAddNewTodo} className="navLink relative p-3 rounded-md font-bold hover:text-textColor hover:translate-y-2 cursor-pointer transition-nav transition-nav">
              <span className={`navLinkShape absolute z-30 opacity-0 transition-nav ${themToggles === "light" ? "light-shadow" : "dark-shadow"}`}></span>
              <span className="relative z-40">New Todo</span>
            </li>
          </ul>
          <div className={`absolute z-20 w-0 h-full rounded-md bg-subLightColor left-0 flex items-center justify-center`} style={{width:`${setLeft}%`}}>
          </div>
          <div>
            <button onClick={changeThemHandler} className="relative z-40 w-10 h-10 flex items-center justify-center rounded-full hover:bg-subLightColor hover:text-textColor transition-nav">
              {themToggles === "light" ? (<MdDarkMode size="25px"/>) : (<MdLightMode size="25px"/>)}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
