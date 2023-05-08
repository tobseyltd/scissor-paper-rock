import iconRock from "../assets/icon-rock.svg";
const Rock = () => {
  return (
    <button>
      <img
        className='p-4 rounded-full border-8 md:p-10 bg-white/90 md:border-10 border-rock-gradient-1'
        src={iconRock}
        alt=''
      />
    </button>
  );
};

export default Rock;
