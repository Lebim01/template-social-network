import { useRouter } from "next/router";
import {
  HiSearch,
  HiOutlineVideoCamera,
  HiOutlinePhotograph,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import { FaTimes, FaFileAlt } from "react-icons/fa";
import { BiImage } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineGif } from "react-icons/md";
import { useState } from "react";
import SearchScreen from "../search";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  const [openNewPost, setOpenNewPost] = useState(false);

  return (
    <>
      <div className="relative flex w-full flex-col gap-1 bg-primary">
        <div className="flex items-center justify-between py-3 px-3">
          <span className="border border-dashed px-3 text-2xl font-bold text-gray-300">
            Logo Here
          </span>
          <div>
            <button onClick={() => setOpenSearch(true)}>
              <HiSearch className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        <div className="flex items-center rounded-t-lg border-b border-b-gray-300 bg-white px-2">
          <input
            placeholder="What's new"
            className="flex-1 p-2 text-lg"
            layoutId={"search"}
            onClick={() => setOpenNewPost(true)}
          />
          <div className="flex gap-5 px-3 text-gray-400">
            <HiOutlineVideoCamera className="h-6 w-6" />
            <button onClick={() => router.push("/chat/attach-photos")}>
              <HiOutlinePhotograph className="h-6 w-6" />
            </button>
            <HiOutlineDotsHorizontal className="h-6 w-6" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openSearch && (
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 z-20 h-full w-full bg-white"
          >
            <SearchScreen onClose={() => setOpenSearch(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openNewPost && (
          <motion.div
            onClick={(e) => {
              e.preventDefault();
            }}
            layoutId={"search"}
            initial={{
              transform: "scale(0)",
            }}
            animate={{
              transform: "scale(1)",
            }}
            exit={{
              transform: "scale(0)",
            }}
            className="absolute z-20 flex h-full w-full max-w-xl flex-col gap-3 bg-white p-5"
          >
            <div className="flex justify-between">
              <button
                className="text-xl font-bold text-primary"
                onClick={() => setOpenNewPost(false)}
              >
                <FaTimes />
              </button>
              <button className="font-bold text-primary">Share</button>
            </div>
            <textarea
              placeholder="Write something..."
              className="w-full flex-1 p-2 text-lg"
            />
            <div className="flex flex-col gap-5 border-t border-gray-300 py-3">
              <span className="text-xl font-bold">Add attach</span>
              <button className="flex items-center gap-4 rounded-lg bg-orange-400 bg-opacity-30 p-3 text-left font-semibold">
                <MdOutlineGif className="border border-orange-900 text-2xl text-orange-900" />
                Gif
              </button>
              <button className="flex items-center gap-4 rounded-lg bg-sky-400 bg-opacity-30 p-3 text-left font-semibold">
                <BiImage className="text-2xl text-sky-900" />
                Photo/Video
              </button>
              <button className="flex items-center gap-4 rounded-lg bg-emerald-400 bg-opacity-30 p-3 text-left font-semibold">
                <BsCalendarEvent className="text-xl text-emerald-900" />
                Plan
              </button>
              <button className="flex items-center gap-4 rounded-lg bg-fuchsia-400 bg-opacity-30 p-3 text-left font-semibold">
                <FaFileAlt className="text-xl text-fuchsia-900" />
                Document
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
