import * as S from "./Station.tyles";
import Title02 from "../../commons/titles/title02/Title02.container";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Station() {
  const [location, setLocation] = useState([]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cac58bf014bb232f01fb4c8b9d4357c3";
    document.head.appendChild(script);

    if ("geolocation" in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      /* 위치정보 사용 불가능 */
      setLocation([37.556944, 126.923855]);
    }

    script.onload = () => {
      if (location.length > 0 && !isMapLoaded) {
        setIsMapLoaded(true);

        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(location[0], location[1]),
            level: 3,
          };

          const map = new window.kakao.maps.Map(container, options);
        });
      }
    };
  }, [location, isMapLoaded]);

  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title="대여소 조회" />
        <S.Contents>
          <S.Map id="map"></S.Map>
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
