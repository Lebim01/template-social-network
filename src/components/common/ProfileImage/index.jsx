const ProfileImage = ({ src, className }) => {
  if(!src) return (
    <div className={`bg-gray-300 rounded-full ${className}`} />
  )

  return (
    <img src={src} />
  )
}

export default ProfileImage