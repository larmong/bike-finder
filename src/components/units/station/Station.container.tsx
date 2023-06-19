import * as S from "./Station.tyles";
import Title02 from "../../commons/titles/title02/Title02.container";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Station() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cac58bf014bb232f01fb4c8b9d4357c3";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        if ("geolocation" in navigator) {
          // 위치정보 사용 가능
          navigator.geolocation.getCurrentPosition((position) => {
            getMap(position.coords.latitude, position.coords.longitude);
          });
        } else {
          // 위치정보 사용 불가능
          getMap(37.556944, 126.923855);
        }

        const getMap = (latitude: number, longitude: number) => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };

          const map = new window.kakao.maps.Map(container, options);
        };
      });
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <Title02 title="대여소 조회" />
        <S.Contents>
          <S.Map id="map">
            <S.MapLoading>지도를 로딩중입니다...</S.MapLoading>
          </S.Map>
        </S.Contents>
      </S.Container>
    </S.Wrapper>
  );
}
