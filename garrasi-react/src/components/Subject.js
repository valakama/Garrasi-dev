function Subject({ subjectName, imageLink, text }) {

  return (
    <div className="flex max-w-xl mx-auto">
      <div className="bg-white rounded-2xl overflow-hidden flex-grow mx-auto flex">
        <div className="flex-grow">
          <div className="flex justify-center mt-16">
            <img
              className="rounded-full border-solid border-white border-4 mt-3 object-cover"
              src={imageLink}
              alt={subjectName}
              style={{ width: '280px', height: '280px' }}
            />
          </div>
          <div className="px-6 pb-6 pt-8">
            <h3 className="text-black text-4xl font-bold mb-4 text-center leading-tight">{subjectName}</h3>
            <p className="text-gray-700 text-base text-center leading-relaxed tracking-widest">
              {text}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 w-2 bg-gray-200 self-stretch ml-32"></div>
    </div>
  );
}

export default Subject;
