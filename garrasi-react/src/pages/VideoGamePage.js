import Header from "../components/Header";
import ItemsGame from "../components/ItemsGame";
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
            {/* mets les nots ici dans une div row */}
            <ItemsGame text={"GTA VI"}/>
        </div>
    );
};

export default VideoGamePage;