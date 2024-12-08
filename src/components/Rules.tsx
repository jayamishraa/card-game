const Rules = () => {
  return (
    <div className="bg-[#08061f92] shadow-slate-400 shadow-md max-w-md w-full rounded-2xl p-8 text-gray-100 backdrop-blur-md border border-gray-700">
    <h1 className="text-3xl font-extrabold text-center mb-6">
        🌟 Memory Game
    </h1>
    <ol className="list-decimal pl-5 space-y-4 text-lg">
        <li>
        <span className="font-semibold">Setup:</span> Lay all cards face down in a grid.
        </li>
        <li>
        <span className="font-semibold">Objective:</span> Match all pairs by flipping cards.
        </li>
        <li>
        <span className="font-semibold">How to Play:</span>
        <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>If they match, they face up.</li>
            <li>If they don’t, they flip back down.</li>
        </ul>
        </li>
        <li>Continue until all pairs are matched.</li>
        <li>Challenge yourself to finish!</li>
    </ol>
    <p className="text-sm text-gray-200 text-center mt-6 ">
        Have fun testing your memory skills! 🎉
        <div className="m-2">
            <button className="bg-gray-300 rounded p-2 break-all text-black ">start</button>
        </div>
    </p>
    </div>
  )
}

export default Rules
