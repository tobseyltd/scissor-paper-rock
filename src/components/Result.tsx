import tw from "tailwind-styled-components/";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

interface Props {
  userPick: string;
  resetUserPick: (value: null) => void;
  updateScore: (value: boolean) => void;
}
const Result = ({ userPick, resetUserPick, updateScore }: Props) => {
  let score = 0;

  const gameOptions = ["paper", "scissors", "rock"];
  const housePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];

  const returnUserPick = (userPick: string) => {
    if (userPick === "paper") return <Paper />;
    if (userPick === "scissors") return <Scissors />;
    if (userPick === "rock") return <Rock />;
  };

  const returnHousePick = (housePick: string) => {
    if (housePick === "paper") return <Paper />;
    if (housePick === "scissors") return <Scissors />;
    if (housePick === "rock") return <Rock />;
  };

  const gameFunc = (userPick: string, housePick: string) => {
    if (userPick === housePick) return "GAME TIE!";

    if (/rockscissors|scissorspaper|paperrock/.test(userPick + housePick)) {
      score = 1;
      return "YOU WIN";
    }
    return "YOU LOSE";
  };

  return (
    <ResultContainer>
      <div className='flex flex-wrap justify-center mr-4 w-4/12 pointer-events-none'>
        <p className='mb-12 text-center text-white'>YOU PICKED</p>
        {returnUserPick(userPick)}
      </div>

      <div className='flex flex-col justify-center text-center'>
        <p className='text-3xl font-extrabold text-white'>
          {gameFunc(userPick, housePick)}
        </p>

        <button
          onClick={() => {
            resetUserPick(null);
            if (score === 1) {
              updateScore(true);
            }
          }}
          className='py-2 mt-3 text-sm text-red-600 bg-white rounded-lg'
        >
          PLAY AGAIN
        </button>
      </div>

      <div className='flex flex-wrap justify-center ml-4 w-4/12 pointer-events-none'>
        <p className='mb-12 text-center text-white'>THE HOUSE PICKED</p>
        {returnHousePick(housePick)}
      </div>
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = tw.div`
  flex
  md:flex-nowrap
 
  justify-between 
  mt-12 
  md:w-5/12
  sm:w-5/12
  w-11/12 
`;
