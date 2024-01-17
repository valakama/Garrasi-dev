import Header from "../components/Header";
import ItemsGame from "../components/ItemsGame";
import Note from "../components/Note";
const VideoGamePage = () => {
    return (
        <div className="flex flex-col">
            <div className="h-[500px] bg-hero-Videogame bg-cover text-white">
                <div className="bg-black bg-opacity-50 h-full">
                    <Header></Header>
                  <div className="flex flex-col h-[360px] items-center pt-24">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl font-bold">
                      Jeux vidéo
                    </h1>
                </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-44 ">
                <h1 className="text-4xl font-bold">Activités Récentes</h1>
            </div>
            <div className="flex">
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
            {/* mets les nots ici dans une div row */}
            <ItemsGame text={"GTA VI"}/>
        </div>
    );
};

export default VideoGamePage;