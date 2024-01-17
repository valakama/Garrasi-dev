import { Link } from "react-router-dom"
import ButtonAction from "./ButtonAction";
import logoWhite from "../assets/logoWhite.png";
const Header = () => {
    return (
        <div className={`flex flex-row justify-between py-5 px-10 items-center text-white relative`}>
        <Link to={"/"} >
          <img src={logoWhite} alt="" className="h-20"/>
        </Link>
        <ul className={`xl:flex flex flex-col absolute top-0 left-0 w-full h-[100vh] z-2 justify-center lg:h-auto bg-black bg-opacity-80 lg:bg-transparent text-center lg:w-auto xl:relative items-center xl:flex-row `}>
        <Link to={"/videoGame"} >
          <li className=' lg:mx-8 text-xl font-bold'>Explorer</li>
        </Link>
        <Link to={"/videoGame"} >
          <li className=' lg:mx-8 text-xl font-bold'>Sport</li>
        </Link>
        <Link to={"/videoGame"} >
          <li className=' lg:mx-8 text-xl font-bold'>Culture</li>
        </Link>
        <Link to={"/videoGame"} >
          <li className=' lg:mx-8 text-xl font-bold'>Technologie</li>
        </Link>
        <Link to={"/videoGame"}>
        <ButtonAction onClick={()=>console.log()} text={"Donnez votre avis"}/>
        </Link>
        </ul>
      </div>
    )
}

export default Header;