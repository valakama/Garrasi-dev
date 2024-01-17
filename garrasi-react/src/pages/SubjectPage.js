import Header from "../components/Header";
import Note from "../components/Note";
import SendNote from "../components/SendNote";
import Subject from "../components/Subject";

function SubjectPage() {
  return (
    <div className="h-[100vh] text-white">
      <Header></Header>
      <div className="flex flex-row md:pl-24 h-[10%] justify-center md:items-start sm:items-center items-center mx-32">
        <Subject subjectName={"GTA VI"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl."}/>
        <div className="flex flex-col w-full p-12 items-center">
          <div className="flex items-center mb-10">
            <h1 className="text-black text-5xl font-semibold">Notes</h1>
            <p className="text-gray-600 ml-3 self-end pb-1">(365)</p>
          </div>
          <Note fullName={"John Doe"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} time={"Il y a 2 heures"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl."} stars={3}/>
          <Note fullName={"John Doe"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} time={"Il y a 2 heures"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl."} stars={4}/>
          <Note fullName={"John Doe"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} time={"Il y a 2 heures"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl."} stars={1}/>
          <Note fullName={"John Doe"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} time={"Il y a 2 heures"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eu ultricies nisl nisl eu nisl."} stars={5}/>
          <div className="bottom-0 right-0 mr-44 mt-1 fixed">
            <SendNote fullName={"John Doe"} imageLink={"https://static.fnac-static.com/multimedia/Images/FD/Comete/173301/CCP_IMG_1200x800/2305648.jpg"} stars={3}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectPage;