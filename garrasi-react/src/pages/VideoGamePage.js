import Header from "../components/Header";
import ItemsGame from "../components/ItemsGame";
import Note from "../components/Note";
import { Link } from "react-router-dom";
import { useState } from "react";
const VideoGamePage = () => {

    const [input, setInput] = useState("");
    const [games, setGames] = useState([
        { name: "GTA VI", icon: "bg-iconGTA" },
        { name: "Minecraft", icon: "bg-iconMinecraft" },
        { name: "Mario", icon: "bg-iconMario" },
        { name: "Geometry Dash", icon: "bg-iconGeometry" },
        { name: "Zelda", icon: "bg-iconZelda" },
        { name: "Terraria", icon: "bg-iconTerraria" },
        { name: "Uncharted", icon: "bg-iconUncharted" },
        { name: "FIFA", icon: "bg-iconFifa" },
    ]);

    // Nouveau gestionnaire pour la touche Entrée
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Filtrer les jeux en fonction de l'entrée
    const [filteredGames, setFilteredGames] = useState(games);

    const handleSearch = () => {
        const results = games.filter(game => 
            game.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredGames(results);
    };

    return (
        <div className="flex flex-col">
            <div className="h-[500px] bg-hero-Videogame bg-cover text-white">
                <div className="bg-black bg-opacity-50 h-full">
                    <Header  isTextWhite={true}></Header>
                  <div className="flex flex-col h-[360px] items-center pt-24">
                    <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl font-bold">
                      Jeux vidéo
                    </h1>
                </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center h-40">
                <input
                    type="text"
                    className="rounded-3xl p-2 border border-gray-300 w-1/4 px-5"
                    placeholder="Recherchez vos jeux ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex  items-center justify-center ">
                <div className="flex flex-wrap  justify-center w-1/2 ">
                    {filteredGames.map(game => (
                        <Link to={"/subject"} key={game.name}>
                            <ItemsGame text={game.name} icon={game.icon} />
                        </Link>
                    ))}
                    {filteredGames.length === 0 && (
                        <p className="text-center text-2xl text-gray-500 w-full">
                            Aucun jeu trouvé
                        </p>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center h-32 ">
                <h1 className="text-4xl font-bold">Activités Récentes</h1>
            </div>
            <div className="flex justify-center items-center">
                <Note fullName={"Valentin Duban"} text={
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit.\
                    Sed quis nulla sed massa varius mollis. Nulla facilisi.\
                    Duis aliquam, tortor nec lacinia lacinia, velit velit\
                    tincidunt urna, vitae tincidunt velit mauris quis nunc.\
                    Donec in ex ut nunc lobortis fermentum. Sed quis nulla"
                }
                stars={4}
                time={"il y a 2 jours"}
                imageLink={"https://i.pinimg.com/236x/a5/67/94/a567940c61eb580455d8f886f55d21b1.jpg"}
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
                imageLink={"https://i.pinimg.com/236x/a5/67/94/a567940c61eb580455d8f886f55d21b1.jpg"}
                />
            </div>
            {/* mets les nots ici dans une div row */}
            
        </div>
    );
};

export default VideoGamePage;