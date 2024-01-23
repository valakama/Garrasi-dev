import { useState } from "react";
import Header from "../components/Header";
import Note from "../components/Note";
import SendNote from "../components/SendNote";
import Subject from "../components/Subject";

function SubjectPage() {

  const [notes, setNotes] = useState([
    {
      "fullName": "John Doe",
      "imageLink": "https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg",
      "time": "Il y a 2 heures",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl.",
      "stars": 3
    },
    {
      "fullName": "John Doe",
      "imageLink": "https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg",
      "time": "Il y a 2 heures",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl.",
      "stars": 3
    },
    {
      "fullName": "John Doe",
      "imageLink": "https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg",
      "time": "Il y a 2 heures",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl.",
      "stars": 3
    }
  ]);

  return (
    <div className="h-[100vh] text-white">
      <Header  isTextWhite={false}></Header>
      <div className="flex flex-row md:pl-24 h-[10%] justify-center md:items-start sm:items-center items-center mx-32">
        <Subject subjectName={"GTA VI"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl."}/>
        <div className="bottom-0 left-36 mt-1 fixed">
          <SendNote fullName={"John Doe"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} stars={3} notes={notes} setNotes={setNotes}/>
        </div>
        <div className="overflow-auto h-[80vh] w-full">
          <div className="flex flex-col w-full p-12 items-center">
            <div className="flex items-center mb-10">
              <h1 className="text-black text-5xl font-semibold">Notes</h1>
              <p className="text-gray-600 ml-3 self-end pb-1">(365)</p>
            </div>
            {notes.map((note, index) => (
              <Note key={index} fullName={note.fullName} imageLink={note.imageLink} time={note.time} text={note.text} stars={note.stars}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectPage;