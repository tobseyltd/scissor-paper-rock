import iconPaper from "../assets/icon-paper.svg";

const Paper = () => {
  return (
    <button className='p-4 rounded-full border-8 md:p-8 bg-white/90 md:border-10 border-paper-gradient-1'>
      <img style={{ minWidth: "40px" }} src={iconPaper} alt='' />
    </button>
  );
};

export default Paper;
