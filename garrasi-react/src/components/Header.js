import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className={`flex flex-row justify-between py-5 px-10 items-center  relative`}>
        <Link to={"/"} >
          <div className=''>
            <h1 className='text-3xl font-extrabold'>Area</h1>
          </div>
        </Link>
        <ul className={`xl:flex  flex flex-col absolute top-0 left-0 w-full h-[100vh] z-2 justify-center lg:h-auto bg-black bg-opacity-80 lg:bg-transparent text-center lg:w-auto xl:relative items-center xl:flex-row `}>
        <Link to={"/explore"} >
          <li className=' lg:mx-8 text-xl'>Mes Automatisations</li>
        </Link>
        <Link to={"/create"}>
          {/* <li ><ButtonAction color='#27917E' text='Automatiser'/></li> */}
        </Link>
        </ul>
      </div>
    )
}

export default Header