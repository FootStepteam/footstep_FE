import { useRecoilValue } from "recoil";
import { IKakaoPlaceSearchResult } from "../../../type/kakaoPlaceSearchResult";
import { placeSearchResult } from "../../../store/placeSearchResult";
import { ReactComponent as Address} from "../../../assets/address.svg";

const PlaceSearchLists = () => {
  const placeLists = useRecoilValue(placeSearchResult);
  const isExist = placeLists.length !== 0;

  const onClickAddPlaceHandler = (place: IKakaoPlaceSearchResult) => {
    // setPlanPlaces({...planPlaces, place});
    console.log("asd")
  };

  return (
    <div id="menu_wrap" className="grow bg-white">
      <h3 className="flex mt-4 mb-6 ml-4 font-NanumGothic font-extrabold text-xl">
        <span className="mr-2">
          <Address width={25} height={25}/>
        </span>
        검색결과
      </h3>
      <div className="h-[40rem] overflow-y-auto">
        {isExist ? (
          <ul id="placesList">
            {placeLists.map((place: IKakaoPlaceSearchResult, index) => (
              <li
                key={place.id}
                className={`flex py-4 h-[7rem] hover:bg-gray-005 border-b border-b-gray-003 cursor-pointer ${
                  index === 0 && "border-t border-t-gray-003"
                }`}
              >
                <div className="ml-4 w-[15em]">
                  <div className="mb-1 flex items-center">
                    <p className="w-[13rem] font-medium text-lg truncate ">
                      <span className="mr-2 text-platinum-001">
                        {index + 1}
                      </span>
                       {place.place_name}
                    </p>
                  </div>
                  <p className="font-normal text-sm">
                    {place.address_name}
                  </p>
                  <p className="font-normal text-sm text-green-001">{place.phone}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="w-9 h-9 bg-white hover:bg-blue-004 border border-gray-003 hover:border-blue-004 rounded-md shadow-sm text-[0.7rem] hover:text-white"
                    onClick={() => onClickAddPlaceHandler(place)}
                  >
                    추가
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center mt-8 font-NanumGothic font-bold text-gray-002 text-sm">
            <p>검색결과가 존재하지 않습니다.</p>
          </div>
        )}
        <div id="pagination" className="flex justify-center items-center" />
      </div>
    </div>
  );
};

export default PlaceSearchLists;
