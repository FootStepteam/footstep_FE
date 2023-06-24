import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ReactComponent as Address } from "../../../assets/address.svg";
import { placeSearchResult } from "../../../store/placeSearchResult";
import { IKakaoPlaceSearchResult } from "../../../type/kakaoMap";
import { IPlaceContentDown } from "../../../type/shareRoom";

const PlaceSearchLists = ({ panTo, addDestination }: IPlaceContentDown) => {
  const [placeLists, setPlaceLists] = useRecoilState(placeSearchResult);
  const isExist = placeLists.length !== 0;

  const onClickAddPlaceHandler = (place: IKakaoPlaceSearchResult) => {
    addDestination(place);
  };

  useEffect(() => {
    setPlaceLists([]);
  }, []);

  return (
    <div
      id="menu_wrap"
      className="grow bg-gray-007"
    >
      <h3 className="flex mt-4 mb-6 ml-4 font-DoHyeon font-normal text-2xl">
        <span className="mr-2">
          <Address
            width={25}
            height={25}
          />
        </span>
        검색결과
      </h3>
      <div className="h-[calc(100vh-15rem-8rem)] overflow-y-auto">
        {isExist ? (
          <ul id="placesList">
            {placeLists.map((place: IKakaoPlaceSearchResult, index) => (
              <li
                className={`flex my-3 py-4 h-[8rem] bg-white hover:bg-gray-006 border-b border-b-gray-004 shadow-sm cursor-pointer ${
                  index === 0 && "border-t border-t-gray-004"
                }`}
              >
                <div
                  key={place.id}
                  onClick={() => panTo(Number(place.y), Number(place.x), index)}
                >
                  <div className="ml-4 w-[17em]">
                    <div className="mb-1">
                      <p className="w-[17rem] font-medium text-lg truncate ">
                        <span className="mr-2 text-platinum-001">
                          {index + 1}
                        </span>
                        {place.place_name}
                      </p>
                    </div>
                    <p className="font-normal text-sm">{place.address_name}</p>
                    <p className="font-normal text-sm text-platinum-001">
                      {place.phone}
                    </p>
                    <a
                      className="font-normal text-[0.8rem] font-light text-blue-002 hover:text-blue-004"
                      href={`https://place.map.kakao.com/${place.id}`}
                      target="_blank"
                    >
                      상세보기
                    </a>
                  </div>
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
        <div
          id="pagination"
          className="flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default PlaceSearchLists;
