import iconPaper from "../assets/icon-paper.svg";

const Paper = () => {
  return (
    <button>
      <img
        className='p-4 rounded-full border-8 md:p-10 bg-white/90 md:border-10 border-paper-gradient-1'
        src={iconPaper}
        alt=''
      />
    </button>
  );
};

export default Paper;
