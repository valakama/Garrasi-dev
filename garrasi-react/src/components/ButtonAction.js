function ButtonAction({onClick, text}) {
    return (
      <div
        onClick={onClick}
        className={"border-2 border-white  font-bold cursor-pointer lg:mx-8 text-xl flex items-center justify-center text-white px-12 h-12 rounded-xl"}
      >
        {text}
      </div>
    );
  }

export default ButtonAction;
