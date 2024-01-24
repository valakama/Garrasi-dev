import React, { useState } from 'react';
import LikesIndicator from './LikesIndicator';
import { FiSend } from "react-icons/fi";

const Note = ({ fullName, imageLink, time, text, stars }) => {

  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  const addComment = (comment) => {
    if (comment.trim() !== "") {
      setComments([comment, ...comments]);
      setInputComment(""); // Réinitialiser l'entrée après l'ajout d'un commentaire
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 mx-48 my-5 border w-[600px] shadow-lg">
      <div className="flex flex-col h-full w-full justify-between">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="bg-gray-300 rounded-full h-12 w-12 overflow-hidden">
              <img className="rounded-full h-full w-full object-cover" src={imageLink} alt='img'></img>
            </div>
            <div className="ml-4">
              <h2 className="text-black text-lg font-semibold">{fullName}</h2>
              <span className="text-gray-500 text-sm">{time}</span>
            </div>
          </div>
          <LikesIndicator checkedCount={stars}/>
        </div>
        <p className="text-gray-700 mt-4">
          {text}
        </p>
        <div className="flex flex-col mt-4">
          <div className='flex flex-row items-center'>
            <textarea
              placeholder="Écrire un commentaire..."
              className="border p-2 text-black resize-none w-[90%] h-12"
              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
              rows="2"
              />
          <FiSend className='m-5 cursor-pointer' size={25} color='black' onClick={() => addComment(inputComment)}/>
          </div>
        </div>
        <div className="mt-4">
          {comments.map((comment, index) => (
            <div key={index} className="text-black p-2 mt-2 border-t border-gray-200 break-words">
              {comment}
            </div>
          ))}
        </div>
        <div className="text-[#0881A7] text-sm font-semibold text-right mt-6">
          Squid Game
        </div>
      </div>
    </div>
  );
}

export default Note;
