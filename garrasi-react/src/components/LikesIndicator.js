import React from 'react';

// Composant pour l'indicateur de likes
const LikesIndicator = ({ checkedCount }) => {
  const bgColorClasses = {
    0: 'bg-[#FF3C3C]',
    1: 'bg-[#FF3C3C]',
    2: 'bg-[#FFB74A]',
    3: 'bg-yellow-400',
    4: 'bg-green-400',
    5: 'bg-green-400',
  };

  const bgColorClass = bgColorClasses[checkedCount] || 'bg-gray-200';

  return (
    <div className={`rounded-full ${bgColorClass} p-2 items-center w-32 h-min`}>
      <div className="flex justify-between">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`rounded-full w-4 h-4 ${i < checkedCount ? 'bg-white' : 'border border-white'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LikesIndicator;
