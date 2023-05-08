import tw from "tailwind-styled-components";
import Paper from "./Paper";
import Scissors from "./Scissors";
import Rock from "./Rock";

interface Props {
  onSelectUserPick: (value: string) => void;
}

const Game = ({ onSelectUserPick }: Props) => {
  return (
    <>
      <StartGameContainer>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => onSelectUserPick("paper")}
          className='mr-8'
        >
          <Paper />
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => onSelectUserPick("scissors")}
          className='ml-8'
        >
          <Scissors />
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => onSelectUserPick("rock")}
          className='mt-8'
        >
          <Rock />
        </div>
      </StartGameContainer>
    </>
  );
};

export default Game;

const StartGameContainer = tw.div`
  flex 
  flex-wrap 
  justify-center 
  mt-12 
  w-3/12 
  bg-[url('../src/assets/bg-triangle.svg')]
  bg-center
  bg-no-repeat
  bg-auto
`;
