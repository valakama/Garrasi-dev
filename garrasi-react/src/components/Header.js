import { Link } from "react-router-dom";
import ButtonAction from "./ButtonAction";
import logoWhite from "../assets/logoWhite.png";
import logoBlack from "../assets/logoBlack.png";
import { MdAccountCircle } from "react-icons/md";

const Header = ({ isTextWhite }) => {
  const textColorClass = isTextWhite ? "text-white" : "text-black";
  const logoSrc = isTextWhite ? logoWhite : logoBlack;

  return (
    <div className={`flex flex-row justify-between py-5 px-10 items-center ${textColorClass} relative`}>
      <Link to={"/"} >
        <img src={logoSrc} alt="" className="h-20"/>
      </Link>
      <ul className={`xl:flex flex flex-col absolute top-0 left-0 w-full h-[100vh] z-2 justify-center lg:h-auto bg-black bg-opacity-80 lg:bg-transparent text-center lg:w-auto xl:relative items-center xl:flex-row`}>
        <Link to={"/videoGame"} >
          <li className={`lg:mx-8 text-xl font-bold ${textColorClass}`}>Explorer</li>
        </Link>
        <Link to={"/videoGame"} >
          <li className={`lg:mx-8 text-xl font-bold ${textColorClass}`}>Sport</li>
        </Link>
        <Link to={"/videoGame"} >
          <li className={`lg:mx-8 text-xl font-bold ${textColorClass}`}>Culture</li>
        </Link>
        <Link to={"/videoGame"} >
          <li className={`lg:mx-8 text-xl font-bold ${textColorClass}`}>Technologie</li>
        </Link>
        <Link to={"/videoGame"}>
        <ButtonAction onClick={()=>console.log()} text={"Donnez votre avis"} isTextWhite={isTextWhite}/>
        </Link>
        <div className="h-15 w-15 rounded-full flex items-center justify-center">
          <MdAccountCircle size={60} color=""/>
        </div>
      </ul>
    </div>
  );
}

export default Header;
