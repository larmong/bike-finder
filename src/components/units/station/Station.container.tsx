import * as S from "./Station.style";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../../commons/style/global.style";
import Title02 from "../../commons/titles/title02/Title02.container";
import Head from "next/head";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Station() {
  const [bikeStations, setBikeStations] = useState<any[]>([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // 위치정보 사용 가능
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      // 위치정보 사용 불가능
      setPosition({
        latitude: 37.556944,
        longitude: 126.923855,
      });
    }

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cac58bf014bb232f01fb4c8b9d4357c3";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            position.latitude,
            position.longitude
          ),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        setIsLoading(false);

        if (bikeStations.length > 0) {
          bikeStations.forEach((station: any) => {
            const latitude = Number(station.stationLatitude);
            const longitude = Number(station.stationLongitude);
            const bikeImage = new window.kakao.maps.MarkerImage(
              "https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Fstation%2Fmarker.svg?alt=media&token=cadd0535-382e-47c8-acaf-c15e75108b63",
              new window.kakao.maps.Size(40, 40),
              {
                offset: new window.kakao.maps.Point(20, 40),
              }
            );
            const markerPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              image: bikeImage,
            });
            marker.setMap(map);
          });
        }
      });
    };
  }, [bikeStations, position]);

  useEffect(() => {
    const apiUrl =
      "http://openapi.seoul.go.kr:8088/77447a58706c617237364d6a694774/json/bikeList/1/1000/";
    axios
      .get(apiUrl)
      .then((response) => {
        const bikeStations = response.data?.rentBikeStatus?.row;
        if (bikeStations) {
          setBikeStations(bikeStations);
        }
      })
      .catch((error) => {
        console.error("따릉이 정류장 데이터를 가져오는 중 에러 발생:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <S.Wrapper>
        <Container>
          <Title02 title="대여소 조회" />
          <S.Contents>
            <S.Map id="map">
              {isLoading ? (
                <S.MapLoading>지도를 로딩중입니다...</S.MapLoading>
              ) : null}
            </S.Map>
          </S.Contents>
        </Container>
      </S.Wrapper>
    </>
  );
}
