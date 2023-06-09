import tw from "tailwind-styled-components";
import { useState } from "react";
import Paper from "./components/Paper";
import Rock from "./components/Rock";
import Scissors from "./components/Scissors";
import Result from "./components/Result";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [score, setScore] = useState(0);
  const [userPick, setUserPick] = useState<string | null>(null);

  const gameElements = [
    { jsx: <Paper />, id: "paper" },
    { jsx: <Scissors />, id: "scissors" },
    { jsx: <Rock />, id: "rock" },
  ];

  return (
    <>
      <SectionWrapper>
        <ScoreBoard score={score} />

        {userPick && (
          <Result
            resetUserPick={(value) => setUserPick(value)}
            userPick={userPick}
            updateScore={(value) => {
              if (value) setScore(score + 1);
            }}
          />
        )}

        {!userPick && (
          <GameContainer>
            {gameElements.map((element) => (
              <div
                key={element.id}
                className='pb-6 w-5/12 text-center md:p-8'
                onClick={() => {
                  setUserPick(element.id);
                }}
              >
                {element.jsx}
              </div>
            ))}
          </GameContainer>
        )}
      </SectionWrapper>
    </>
  );
}

export default App;

const SectionWrapper = tw.section`
  flex 
  flex-col 
  justify-center 
  place-items-center
  h-screen center 
  bg-gradient-radial 
  from-sky-950 via-scissors-gradient-blue2 to-scissors-gradient-blue1
`;

const GameContainer = tw.div`
  flex 
  flex-wrap 
  justify-center
  overflow-visible
  mt-12 
  md:w-5/12 

  w-6/6
  bg-[url('../src/assets/bg-triangle.svg')]
  bg-center
  bg-no-repeat
  md:bg-auto
  bg-contain
`;
