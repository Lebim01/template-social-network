import Header from "components/common/layout/Header";
import BackButton from "components/common/BackButton";
import { FiShare } from "react-icons/fi";
import Event from "components/event-detail";

const EventDetail = () => {
  return (
    <div>
      <Header
        left={<BackButton />}
        right={
          <button className=" text-primary">
            <FiShare />
          </button>
        }
      />
      <Event />
    </div>
  );
};

export default EventDetail;
