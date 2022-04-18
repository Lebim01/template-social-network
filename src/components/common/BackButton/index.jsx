import { BiArrowBack } from "react-icons/bi";

const BackButton = ({ className }) => {
  return (
    <button
      className={`text-primary ${className}`}
      onClick={() => history.back()}
    >
      <BiArrowBack />
    </button>
  );
};

export default BackButton;
