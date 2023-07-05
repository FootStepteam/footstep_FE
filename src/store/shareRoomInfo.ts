import { atom } from "recoil";
import { IShareRoom } from "../type/shareRoom";

const initialValue: IShareRoom = {
  endPoint: "",
  imageUrl: "",
  shareCode: "",
  shareId: 0,
  shareName: "",
  startPoint: "",
  travelEndDate: "",
  travelStartDate: "",
  hostFlag: false,
};

export const shareRoomInfo = atom({
  key: "shareRoomInfo",
  default: initialValue,
});
