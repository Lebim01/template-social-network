const ProfileImage = ({ src, className }) => {
  if (!src) return <div className={`rounded-full bg-gray-300 ${className}`} />;

  return <img src={src} className={`rounded-full object-cover ${className}`} />;
};

export default ProfileImage;
