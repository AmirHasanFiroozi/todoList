import { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import Hero from "../../components/Hero/Hero"
import TodoSection from "../TodoSection/TodoSection";

function Home(){
    const [changeNavStyle , setChangeNavStyle] = useState(false);
    const [scrollY , setScrollY] = useState(0);
    const [windowHeight , setWindowHeight] = useState(window.innerHeight);
    const addNweTodoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
          setWindowHeight(window.innerHeight);
    
          if (window.scrollY > 20) {
            setChangeNavStyle(true);
          } else {
            setChangeNavStyle(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        window.addEventListener("resize", () => setWindowHeight(window.innerHeight));
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", () => setWindowHeight(window.innerHeight));
        };
      }, []);
    return(
      <div className="pt-5">
        <Nav scrollY={scrollY} windowHeight={windowHeight} changeNavStyle={changeNavStyle} addNweTodoRef={addNweTodoRef}/>  
        <Hero />
        <TodoSection ref={addNweTodoRef}/>
     </div>
    );
}
export default Home ;