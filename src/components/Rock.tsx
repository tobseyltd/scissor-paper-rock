import iconRock from "../assets/icon-rock.svg";
const Rock = () => {
  return (
    <button className='p-4 rounded-full border-8 md:p-8 bg-white/90 md:border-10 border-rock-gradient-1'>
      <img style={{ minWidth: "40px" }} src={iconRock} alt='' />
    </button>
  );
};

export default Rock;
