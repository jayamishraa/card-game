const Rules = () => {
  return (
    <div className="bg-[#08061f92] shadow-slate-400 shadow-md max-w-md w-full rounded-2xl p-8 text-gray-100 backdrop-blur-md border border-gray-700">
      <h1 className="text-3xl font-extrabold text-center mb-4">
         Memory Match! 
      </h1>

      <ol className="pl-5 space-y-3 text-lg">
        <li>
          Flip two cards and see if they’re a matching pair 
        </li>
        <li>
          If they match, yay, they stay up! ✨
        </li>
        <li>
          If not, back to sleep they go 😴
        </li>
        <li>
          Match all pairs to win! 
        </li>
      </ol>

      <p className="text-sm text-gray-200 text-center mt-5">
        Have fun & good luck! :3 
      </p>
    </div>
  );
};

export default Rules;
