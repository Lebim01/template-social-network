import CardActions from '../common/CardActions'
import CardHeader from '../common/CardHeader'
import SharedPost from './sharedPost'

const SharedCardPost = ({ owner_photo, owner_name, time_ago, body_text, shared, likes_count, comments_count }) => {
  return (
    <div className="feed-card">
      <CardHeader 
        owner_name={owner_name} 
        owner_photo={owner_photo} 
        time_ago={time_ago}
        customText={(
          <span>
            <span className='font-bold'>{owner_name}</span>
            {' '}
            <span className='text-gray-500'>shared</span>
            {' '}
            <span className=''>post</span>
          </span>
        )}
      />
      <div className='text-lg'>
        {body_text}
        <SharedPost {...shared} />
      </div>
      <div className="h-[1px] w-full bg-gray-100"></div>
      <CardActions likes_count={likes_count} comments_count={comments_count} />
    </div>
  )
}

export default SharedCardPost