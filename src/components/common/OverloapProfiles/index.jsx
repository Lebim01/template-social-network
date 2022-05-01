import ProfileImage from "../ProfileImage";

const OverloapProfiles = ({ profiles, max = 10 }) => {
  return (
    <div className="overloap-profiles flex">
      {profiles
        .slice(0, max)
        .map(({ photo, className = "", ...props }, index) => (
          <ProfileImage
            key={index}
            src={photo}
            className={`h-8 w-8 border border-white ${className}`}
            {...props}
          />
        ))}
    </div>
  );
};

export default OverloapProfiles;
