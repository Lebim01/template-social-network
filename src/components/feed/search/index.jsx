import { BiArrowBack } from "react-icons/bi";
import Input from "components/common/Input";
import OverloapProfiles from "components/common/OverloapProfiles";
import ProfileImage from "components/common/ProfileImage";
import { HiSearch } from "react-icons/hi";
import { useCallback } from "react";

const ImportItem = ({ children, className = "" }) => {
  return (
    <div className="flex-0-auto flex w-1/6 flex-col items-center justify-between gap-2">
      <div
        className={`aspect-square w-full rounded-full bg-gray-200 p-3 ${className}`}
      ></div>
      <span className="max-lines-1 font-semibold">{children}</span>
    </div>
  );
};

const PeopleSuggestion = ({ name, common, photo = {} }) => {
  const { className: classNamePhoto = "", ...photoProps } = photo;

  return (
    <div className="border-b border-gray-200 px-4 py-4">
      <div className="flex gap-4">
        <div>
          <ProfileImage
            className={`h-16 w-16 ${classNamePhoto}`}
            {...photoProps}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">{name}</span>
          <div className="flex items-center">
            <OverloapProfiles profiles={common.slice(0, 3)} />
            <span className="text-gray-500">
              {common.length} common contact
            </span>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full bg-primary px-5 py-1 font-semibold text-primary-text">
              Add
            </button>
            <button className="rounded-full bg-primary-transparent px-5 py-1 font-semibold text-primary">
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchScreen = ({ onClose }) => {
  const refInput = useCallback((ref) => {
    if (ref) ref.focus();
  }, []);

  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="flex items-center gap-3 p-3">
          <button onClick={onClose}>
            <BiArrowBack />
          </button>

          <Input
            inputProps={{
              placeholder: "Search",
              ref: refInput,
            }}
            iconLeft={<HiSearch className="text-gray-400" />}
          />
        </div>
      </div>
      <div className="border-b border-gray-200">
        <div className="flex flex-col gap-5 p-3">
          <span className="font-semibold text-gray-500">IMPORT CONTACTS</span>
          <div className="flex gap-6 overflow-x-auto px-3 pb-2">
            <ImportItem className="bg-green-500">Contacts</ImportItem>
            <ImportItem className="bg-[#3CA6F1]">Twitter</ImportItem>
            <ImportItem className="bg-[#3C88EE]">Google</ImportItem>
            <ImportItem className="bg-[#4570C6]">Facebook</ImportItem>
            <ImportItem className="bg-[#9549E4]">Instagram</ImportItem>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-5 p-3">
          <span className="font-semibold text-gray-500">SUGGESTION</span>
          <div className="flex flex-col">
            <PeopleSuggestion
              common={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
              name="Melvin Rogers"
            />
            <PeopleSuggestion
              common={[
                {},
                {},
                {
                  letters: "GF",
                  className: "text-sm text-sky-600 bg-sky-300 font-bold",
                },
              ]}
              name="Todd Cohen"
              photo={{
                letters: "TC",
                className:
                  "bg-opacity-60 bg-pink-300 text-pink-600 text-xl font-bold",
              }}
            />
            <PeopleSuggestion
              common={[
                {
                  letters: "AA",
                  className: "bg-violet-300 text-sm font-bold text-violet-600",
                },
                {},
              ]}
              name="Todd Cohen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
