import React, { useState } from 'react';
import LikesIndicator from './LikesIndicator';

const SendNote = ({ fullName, imageLink, stars }) => {
  const [note, setNote] = useState(""); // État pour le contenu de la note

  const handleInputChange = (event) => {
    setNote(event.target.value);
  };

  // Fonction pour simuler l'envoi de la note
  const sendNote = () => {
    console.log("Note envoyée :", note);
    // Ici, ajouter la logique pour envoyer la note à votre serveur ou API
  };

  return (
    <div className="bg-white rounded-2xl p-6 mx-48 my-5 border w-[600px] shadow-sm">
      <div className="flex flex-col h-full w-full justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="rounded-full h-12 w-12 object-cover" src={imageLink} alt='Profil' />
            <div className="ml-4">
              <h2 className="text-black text-xl font-semibold">{fullName}</h2>
            </div>
          </div>
          <LikesIndicator checkedCount={stars}/>
        </div>
        <div className="flex items-center mt-4 relative"> {/* Ajout d'une div pour le champ de texte */}
          <textarea
            value={note}
            onChange={handleInputChange}
            placeholder="Écris ton avis."
            className="resize-none border rounded-full py-3 pl-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12 overflow-hidden"
            style={{
              minHeight: "48px",
              paddingRight: "3rem", /* Ajout de l'espace pour l'icône */
            }}
          />
          <svg onClick={sendNote} className="absolute right-3 bottom-3 fill-current text-gray-600 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SendNote;
