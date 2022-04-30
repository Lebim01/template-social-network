import { useRouter } from "next/router";

const ProfileImage = ({ src, className, letters }) => {
  const router = useRouter();

  if (!src)
    return (
      <div
        className={`rounded-full bg-gray-300 ${className} flex items-center justify-center`}
        onClick={() => router.push("/profile/two")}
      >
        {letters}
      </div>
    );

  return (
    <img
      src={src}
      className={`rounded-full object-cover ${className}`}
      onClick={() => router.push("/profile/two")}
    />
  );
};

export default ProfileImage;
