import iconScissors from "../assets/icon-scissors.svg";
const Scissors = () => {
  return (
    <button>
      <img
        className='p-4 rounded-full border-8 md:p-10 bg-white/90 md:border-10 border-scissor-gradient-1'
        src={iconScissors}
        alt=''
      />
    </button>
  );
};

export default Scissors;
