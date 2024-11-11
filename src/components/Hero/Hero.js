import { useContext } from "react";
import { Them } from "../../App";
import heroImage from '../../assets/images/heroImage.png';
import './Hero.css'

function Hero(){
    let [themToggles] = useContext(Them);
    return(
        <section className={`container md:w-[95%] text-center relative my-8 bg-mainLightColor dark:bg-mainDarkColor hover:bg-subLightColor dark:hover:bg-subLightColor transition-nav rounded-lg flex items-center justify-center p-5 ${themToggles === "light" ? "light-shadow" : "dark-shadow"} z-0`}>
            <div className="absolute w-3/4 text-[10vw] text-textColor text-shadow heroText-animation">TO DO LIST</div>
            <div className="w-3/4 h-[500px]">
              <img className="w-full h-full object-contain" src={heroImage} alt="heroImage" />
            </div>
        </section>
    )
}
export default Hero