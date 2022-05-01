import ProfileImage from "components/common/ProfileImage";
import Link from "next/link";
import { useRouter } from "next/router";

const CardHeader = ({ owner_name, time_ago, customText, link }) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3">
      <ProfileImage className={"h-10 w-10"} />
      <div
        className="flex flex-col hover:cursor-pointer"
        onClick={() => router.push("/post/test")}
      >
        <span className="text-md flex-1 hover:bg-gray-100 active:bg-gray-100">
          {customText ? (
            customText
          ) : (
            <span className="font-bold">{owner_name}</span>
          )}
        </span>
        {link ? (
          <Link {...link}>
            <span className="text-sm text-gray-400 decoration-primary hover:underline active:underline">
              {time_ago}
            </span>
          </Link>
        ) : (
          <span className="text-sm text-gray-400">{time_ago}</span>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
