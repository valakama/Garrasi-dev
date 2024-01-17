import React from 'react';
import LikesIndicator from './LikesIndicator';

const Note = ({ fullName, imageLink, time, text, stars }) => {
  return (
    <div className="bg-white rounded-2xl p-6 mx-auto my-5 border w-[600px]">
      <div className="flex flex-col h-full w-full justify-between">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="bg-gray-300 rounded-full h-12 w-12">
              <img className="rounded-full h-full w-full object-cover" src={imageLink} alt='img'></img>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{fullName}</h2>
              <span className="text-gray-500 text-sm">{time}</span>
            </div>
          </div>
          <LikesIndicator checkedCount={stars}/>
        </div>
        <p className="text-gray-700 mt-4">
          {text}
        </p>
        <div className="text-[#0881A7] text-sm font-semibold text-right mt-6">
          Squid Game
        </div>
      </div>
    </div>
  );
}

export default Note;
