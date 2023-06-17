import { useRecoilValue } from "recoil";
import { ReactComponent as Exit } from "../../../../assets/exit.svg";
import { shareRoomInfo } from "../../../../store/shareRoomInfo";
import PlanDate from "../../../planShareEntrance/createShareRoomModal/PlanDate";

const SideBarHeader = () => {
  const getShareRoomInfo = useRecoilValue(shareRoomInfo);

  return (
    <div className="w-planShareRoomSideBar h-planShareRoomHeader bg-sky-005">
      <button type="button" className="mt-4 mb-6 ml-2  ">
        <Exit fill="#A5A5A5" width={25} height={25} />
      </button>
      <div className="ml-12">
        <p className=" text-white text-2xl font-bold">
          {getShareRoomInfo.shareName}
        </p>
        <PlanDate />
      </div>
    </div>
  );
};

export default SideBarHeader;
