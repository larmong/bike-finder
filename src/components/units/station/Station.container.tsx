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
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.556944, 126.923855), // 지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

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
