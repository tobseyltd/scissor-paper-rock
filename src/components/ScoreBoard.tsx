import logo from '../assets/logo.svg'

interface Props {
    score: number;
}

const ScoreBoard = ({ score }: Props) => {
  return (
    <div className='flex flex-wrap justify-center p-5 rounded-lg border md:justify-between md:w-5/12'>
    <div className='mr-5'>
      <img src={logo} alt='' width="100%"/>
    </div>

    <div className='flex flex-col justify-center place-items-center px-5 py-2 bg-white rounded-xl'>
      <p>SCORE</p>
      <p className='text-3xl font-bold'>{score}</p>
    </div>
  </div>
  )
}

export default ScoreBoard