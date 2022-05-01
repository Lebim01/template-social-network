import { useRouter } from "next/router";

const ProfileImage = ({ src, className = "", letters }) => {
  const router = useRouter();

  if (!src)
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-gray-300 hover:cursor-pointer ${className}`}
        onClick={() => router.push("/profile/two")}
      >
        <span>{letters}</span>
      </div>
    );

  return (
    <img
      src={src}
      className={`rounded-full object-cover hover:cursor-pointer ${className}`}
      onClick={() => router.push("/profile/two")}
    />
  );
};

export default ProfileImage;
