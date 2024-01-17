const ItemsGame = ({text}) => {
    return (
        <div className="bg-red-500 h-52 w-44 rounded-xl flex items-end">
            <div className="bg-black bg-opacity-50 h-52 w-44 rounded-xl p-5 flex items-end">
                <h1 className="text-white font-bold">
                    {text}
                </h1>
            </div>
        </div>
    )
}
export default ItemsGame;