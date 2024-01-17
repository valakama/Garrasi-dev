import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="h-[100vh] bg-hero-image bg-cover text-white">
      <div className="bg-black bg-opacity-50 h-full">
        <div className="flex flex-col md:pl-24 h-[90%] justify-center md:items-start sm:items-center items-center">
          <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl font-bold pb-10">
            Commentez le monde avec passion
          </h1>
          <h2 className="text-3xl md:text-5xl pb-10">
            Votre avis compte ici et partout!
          </h2>
            <div className="flex text-xl justify-center border-4 rounded-full px-2 py-5 md:w-96">
              Commencez dès maintenant
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
