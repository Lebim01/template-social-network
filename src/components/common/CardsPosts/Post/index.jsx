import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { BiLike } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { BsArrow90DegRight } from 'react-icons/bs'
import CardHeader from '../common/CardHeader'
import CardActions from '../common/CardActions'

const CardPost = ({ owner_photo, owner_name, time_ago, body_text }) => {
  return (
    <div className="feed-card">
      <CardHeader 
        owner_name={owner_name} 
        owner_photo={owner_photo} 
        time_ago={time_ago} 
      />
      <div className='text-lg'>
        {body_text}
      </div>
      <div className="h-[1px] w-full bg-gray-100"></div>
      <CardActions />
    </div>
  )
}

export default CardPost