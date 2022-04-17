
const IconBadgeCount = ({ children, count }) => {
  return (
    <div className="relative">
      {children}
      {count &&
        <span className="bg-red-500 rounded-full absolute text-tiny h-3 w-3 flex justify-center items-center text-white top-[-5px] right-[-5px]">
          {count}
        </span>
      }
    </div>
  )
}

export default IconBadgeCount