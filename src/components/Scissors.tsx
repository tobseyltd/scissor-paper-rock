import iconScissors from "../assets/icon-scissors.svg";
const Scissors = () => {
  return (
    <button className='p-4 rounded-full border-8 md:p-8 bg-white/90 md:border-10 border-scissor-gradient-1'>
      <img style={{ minWidth: "40px" }} src={iconScissors} alt='' />
    </button>
  );
};

export default Scissors;
