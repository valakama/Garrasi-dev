const ItemsGame = ({ text }) => {
    return (
        <div className="bg-iconGta h-52 w-44 rounded-xl bg-cover flex items-end m-5">
            <div className="bg-black bg-opacity-50 h-52 w-44 rounded-xl p-5 flex items-end overflow-hidden">
                <h1 className="text-white font-bold">
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default ItemsGame;
