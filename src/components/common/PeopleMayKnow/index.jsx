import { FaTimes } from 'react-icons/fa'
import { BsPersonCheck, BsPersonPlus } from 'react-icons/bs'
import ProfileImage from '../ProfileImage'

const PersonMayKnow = ({ person_name, person_image, following }) => {
  return (
    <div className='flex flex-0-auto flex-col justify-between items-center gap-2 w-1/6'>
      <ProfileImage className={"w-full aspect-square"} src={person_image} />
      <span className='text-semitiny font-bold break-words text-center max-lines-2'>{person_name}</span>
      {
        following 
          ? (
            <button className='border-primary border text-sm px-3 py-1 rounded-full text-primary'>
              <BsPersonCheck />
            </button>
          )
          : (
            <button className='bg-primary text-sm px-3 py-1 rounded-full text-white'>
              <BsPersonPlus />
            </button>
          ) 
      }
      
    </div>
  )
}

const PeopleMayKnow = () => {
  return (
    <div className="feed-card-no-p py-3">
      <div className='flex justify-between items-center px-3'>
        <span className="text-md text-gray-400 font-bold">People you may know</span>
        <span>
          <FaTimes className='text-gray-400' />
        </span>
      </div>
      <div className='overflow-x-auto flex gap-6 pb-2 px-3'>
        <PersonMayKnow person_name={"Denis"} />
        <PersonMayKnow person_name={"Marcos"} following />
        <PersonMayKnow person_name={"Vanessa"} following />
        <PersonMayKnow person_name={"Jose"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
        <PersonMayKnow person_name={"Juan Pedro Gonzalez Suñiga"} />
      </div>
    </div>
  )
}

export default PeopleMayKnow