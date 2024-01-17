const ItemsGame = ({ text , icon}) => {
    return (
        <div className={`${icon} h-48 w-44 rounded-xl bg-cover flex items-end m-5`}>
            <div className="bg-gradient-to-t from-gray-900 h-48 w-44  rounded-xl p-5 flex items-end overflow-hidden">
                <h1 className="text-white font-bold">
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default ItemsGame;
