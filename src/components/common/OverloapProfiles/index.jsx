import ProfileImage from "../ProfileImage";

const OverloapProfiles = ({ profiles, max = 10 }) => {
  return (
    <div className="overloap-profiles flex">
      {profiles.slice(0, max).map((f, index) => (
        <ProfileImage
          key={index}
          src={f.photo}
          className="h-8 w-8 border border-white"
        />
      ))}
    </div>
  );
};

export default OverloapProfiles;
