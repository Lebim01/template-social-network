const ProfileImage = ({ src, className, letters }) => {
  if (!src)
    return (
      <div
        className={`rounded-full bg-gray-300 ${className} flex items-center justify-center`}
      >
        {letters}
      </div>
    );

  return <img src={src} className={`rounded-full object-cover ${className}`} />;
};

export default ProfileImage;
