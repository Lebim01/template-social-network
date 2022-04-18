import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  return (
    <button className=" text-primary" onClick={() => history.back()}>
      <BiArrowBack />
    </button>
  );
};

export default BackButton;
