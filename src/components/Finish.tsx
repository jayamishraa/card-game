import youWin from '../assets/you-win.gif';

type Props = {
  onRestart: () => void;
};

const Finish = ({ onRestart }: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 max-w-md w-full rounded-2xl shadow-xl p-8 text-center text-gray-100">

        <h1 className="text-4xl font-extrabold mb-4 text-green-400">Congratulations!</h1>

        <p className="text-lg text-gray-300">
          You have successfully completed the game! Great job testing your memory and skills.
        </p>

        <button
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          onClick={onRestart}
        >
          Back to Rules
        </button>

        <div className='flex justify-center items-center mt-4'>
          <img src={youWin} className='w-60' />
        </div>
        
      </div>
    </div>
  );
};

export default Finish;
