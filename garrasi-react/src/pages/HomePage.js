import { Link } from "react-router-dom";
import Header from "../components/Header";
import Note from "../components/Note";
function HomePage() {
    return (
      <div className="h-[100vh] bg-hero-image bg-cover text-white">
        <div className="bg-black bg-opacity-50 h-full">
            <Header isTextWhite={true}></Header>
          <div className="flex flex-col md:pl-24 h-[90%] justify-center md:items-start sm:items-center items-center">
            <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl font-bold pb-10">
              Commentez le monde avec passion
            </h1>
            <h2 className="text-3xl md:text-5xl pb-10">
              Votre avis compte ici et partout!
            </h2>
              <Link to={"/subject"}>
                <div className="flex text-xl justify-center border-4 font-bold rounded-full px-2 py-5 md:w-96">
                  Commencez dès maintenant
                </div>
              </Link>
          </div>
        </div>
        <div className="flex flex-col w-full p-12">
            <h1 className="text-black text-5xl font-extrabold">Activités récentes</h1>
            <div className="flex flex-row mt-12">

            <Note fullName={"Valentin Duban"} text={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit.\
              Sed quis nulla sed massa varius mollis. Nulla facilisi.\
              Duis aliquam, tortor nec lacinia lacinia, velit velit\
              tincidunt urna, vitae tincidunt velit mauris quis nunc.\
              Donec in ex ut nunc lobortis fermentum. Sed quis nulla"
            }
            stars={4}
            time={"il y a 2 jours"}
                imageLink={"https://www.gala.fr/imgre/fit/~1~gal~2023~11~20~a77b72d7-fde4-4fb1-af01-f64492bf244b.jpeg/1725x1194/quality/80/eve-gilles-miss-france-2024.jpeg"}
                />
                                <Note fullName={"Valentin Duban"} text={
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit.\
                    Sed quis nulla sed massa varius mollis. Nulla facilisi.\
                    Duis aliquam, tortor nec lacinia lacinia, velit velit\
                    tincidunt urna, vitae tincidunt velit mauris quis nunc.\
                    Donec in ex ut nunc lobortis fermentum. Sed quis nulla"
                  }
                  stars={4}
                  time={"il y a 2 jours"}
                  imageLink={"https://www.gala.fr/imgre/fit/~1~gal~2023~11~20~a77b72d7-fde4-4fb1-af01-f64492bf244b.jpeg/1725x1194/quality/80/eve-gilles-miss-france-2024.jpeg"}
                  />
          </div>
        </div>
      </div>
    );
  }
export default HomePage;