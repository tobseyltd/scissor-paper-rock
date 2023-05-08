import logo from '../assets/logo.svg'

interface Props {
    score: number;
}

const ScoreBoard = ({ score }: Props) => {
  return (
    <div className='flex justify-between p-5 w-5/12 rounded-lg border'>
    <div>
      <img src={logo} alt='' />
    </div>

    <div className='flex flex-col justify-center place-items-center px-5 py-2 bg-white rounded-xl'>
      <p>SCORE</p>
      <p className='text-3xl font-bold'>{score}</p>
    </div>
  </div>
  )
}

export default ScoreBoard