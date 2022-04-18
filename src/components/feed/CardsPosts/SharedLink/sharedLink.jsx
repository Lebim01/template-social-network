import Link from "next/link";
import { TiFlashOutline } from "react-icons/ti";

const SharedLink = ({ link }) => {
  return (
    <div className="">
      <div className="h-32 w-full bg-gray-300"></div>
      <div className="bg-gray-100 p-3">
        <span className="max-lines-2 inline-block font-bold leading-snug">
          Robinhood rolls out zero-fee crypto trading as it hits 4M users
        </span>
        <span className="text-md max-lines-3 mt-1 inline-block leading-none text-gray-500">
          Google’s YouTube TV app has received a recent update that allows for
          picture-in-picture on Android phones running Nougat or Oreo.
        </span>
        <Link href={link} passHref>
          <a target="_blank">
            <span className="mt-2 flex gap-1 text-primary">
              <TiFlashOutline className="h-6 w-6 rounded-full bg-primary p-1 text-primary-text" />
              Read more
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SharedLink;
