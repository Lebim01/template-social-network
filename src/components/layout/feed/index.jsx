import { HiOutlineAnnotation, HiOutlineVideoCamera, HiOutlinePhotograph, HiOutlineDotsHorizontal } from 'react-icons/hi'
import IconBadgeCount from 'components/common/IconBadge/count'
import CardPost from 'components/common/CardsPosts/Post'
import PeopleMayKnow from 'components/common/PeopleMayKnow'
import SharedCardPost from 'components/common/CardsPosts/SharedPost'
import FooterNavigationBar from 'components/common/footerNavigationBar'

const Header = () => {
  return (
    <div className="w-full bg-primary flex flex-col gap-1">
      <div className="flex justify-between px-2 mt-4">
        <div className="border border-black rounded-full h-5 w-5 shadow-md shadow-stone-600">
          
        </div>
        <div>
          <IconBadgeCount count={5}>
            <HiOutlineAnnotation className='h-5 w-5 text-white' />
          </IconBadgeCount>
        </div>
      </div>
      <div className="px-2 mb-2">
        <span className="text-2xl font-bold text-white">Feed</span>
      </div>
      <div className="bg-white rounded-t-lg px-2 flex items-center border-b border-b-gray-300">
        <input placeholder="What's new" className="p-2 flex-1" />
        <div className='px-2 text-gray-400 flex gap-5'>
          <HiOutlineVideoCamera className='h-5 w-5' />
          <HiOutlinePhotograph className='h-5 w-5' />
          <HiOutlineDotsHorizontal className='h-5 w-5' />
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className='flex flex-col gap-3 overflow-auto pb-3'>
      <CardPost 
        body_text={"Living in today's metropolitan world of cellular phones, mobile"} 
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
      <PeopleMayKnow />
      <SharedCardPost
        body_text={"Living in today's metropolitan world of cellular phones, mobile"} 
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
        likes_count={39}
        comments_count={10}
        shared={{
          body_text: "Living in today's metropolitan world of cellular phones, mobile", 
          owner_name: "Victor Alvarez",
          time_ago: "1 day ago"
        }}
      />
      <CardPost 
        body_text={"Living in today's metropolitan world of cellular phones, mobile"} 
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
      <CardPost 
        body_text={"Living in today's metropolitan world of cellular phones, mobile"} 
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
      <CardPost 
        body_text={"Living in today's metropolitan world of cellular phones, mobile"} 
        owner_name="Victor Alvarez"
        time_ago="1 day ago"
      />
    </div>
  )
}

const Feed = () => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-gray-100 h-full">
        <Header />
        <Body />
      </div>
      <FooterNavigationBar />
    </>
  )
}

export default Feed