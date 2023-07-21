import * as S from "./Ranking.style";
import Radio02 from "../../../commons/inputs/radio/radio02/Radio02.container";
import { Notice } from "../../../commons/notices/notice/Notice.style";
import { getPrice } from "../../../commons/utils/utils";
import { useRecoilState } from "recoil";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../commons/store/store";
import { IAllUserRanking } from "./Ranking.types";

export default function Ranking() {
  // 주간 랭킹 이용 정보 (10등까지)
  const weeklyAllUserRanking = [
    { userId: "tim4231", km: 1008 },
    { userId: "rkdsodvk9233", km: 959 },
    { userId: "ncj023", km: 901 },
    { userId: "sinena1243", km: 893 },
    { userId: "ansimon4231", km: 884 },
    { userId: "cool111", km: 865 },
    { userId: "xoflvbsd", km: 851 },
    { userId: "ballb321", km: 833 },
    { userId: "piaoshi23ff", km: 812 },
    { userId: "samgoofsd1", km: 809 },
  ];
  // 월간 랭킹 이용 정보 (10등까지)
  const monthlyAllUserRanking = [
    { userId: "tim4231", km: 3023 },
    { userId: "rkdsodvk9233", km: 2434 },
    { userId: "ncj023", km: 2333 },
    { userId: "sinena1243", km: 2113 },
    { userId: "ansimon4231", km: 1932 },
    { userId: "cool111", km: 1823 },
    { userId: "xoflvbsd", km: 1532 },
    { userId: "ballb321", km: 1223 },
    { userId: "piaoshi23ff", km: 1158 },
    { userId: "samgoofsd1", km: 1069 },
  ];

  const RANKING_TYPE = [
    {
      id: 0,
      name: "주간",
      checkedState: true,
    },
    {
      id: 1,
      name: "월간",
      checkedState: false,
    },
  ];

  const [rankingNum, setRankingNum] = useState(0);

  const onClickTicketType = (radioNum: number) => {
    setRankingNum(Number(radioNum));
  };

  // 나의 정보(주간/월간)
  const [loginUser] = useRecoilState<string | null>(loginUserState);
  const [userKm, setUserKm] = useState<string>("0");
  const [userRanking, setUserRanking] = useState<number>(0);

  useEffect(() => {
    const getFaqData = async () => {
      try {
        const data = await query(
          collection(db, "user"),
          where("email", "==", loginUser)
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserKm(result[0].use.distance);
      } catch (error) {}
    };
    void getFaqData();
  }, [loginUser]);

  return (
    <S.Wrapper>
      <Notice>
        · {rankingNum === 0 ? "전 주 월요일 ~ 일요일" : "전 월 1일 ~ 말일"}
        까지의 이용거리 실적입니다.
        <br />· 랭킹서비스 이용 거리는 실제 이용 거리와 다를 수 있습니다.
      </Notice>
      <Radio02
        onClickRadio={onClickTicketType}
        radioData={RANKING_TYPE}
        radioName="ranking"
      />
      {rankingNum === 0 ? (
        <S.RankingWrapper>
          <S.RankingGroup>
            <S.RankingTitle>나의 랭킹</S.RankingTitle>
            <S.UserRankingTable>
              <S.TableItem01 className="t-head">
                {userRanking === 0 ? "-" : userRanking} 등
              </S.TableItem01>
              <S.TableItem01 className="t-head">{loginUser}</S.TableItem01>
              <S.TableItem01 className="t-head">{userKm} km</S.TableItem01>
            </S.UserRankingTable>
          </S.RankingGroup>
          <S.RankingGroup>
            <S.RankingTitle>전체 랭킹</S.RankingTitle>
            <S.UserRankingTable>
              <S.TableItem01 className="t-head">등수</S.TableItem01>
              <S.TableItem01 className="t-head">아이디</S.TableItem01>
              <S.TableItem01 className="t-head">이용거리</S.TableItem01>
              {weeklyAllUserRanking.map(
                (el: IAllUserRanking, index: number) => (
                  <Fragment key={index}>
                    <S.TableItem01>{index + 1} 등</S.TableItem01>
                    <S.TableItem01>{el.userId}</S.TableItem01>
                    <S.TableItem01>{getPrice(el.km)} km</S.TableItem01>
                  </Fragment>
                )
              )}
            </S.UserRankingTable>
          </S.RankingGroup>
        </S.RankingWrapper>
      ) : (
        <S.RankingWrapper>
          <S.RankingGroup>
            <S.RankingTitle>나의 랭킹</S.RankingTitle>
            <S.UserRankingTable>
              <S.TableItem01 className="t-head">
                {userRanking === 0 ? "-" : userRanking} 등
              </S.TableItem01>
              <S.TableItem01 className="t-head">{loginUser}</S.TableItem01>
              <S.TableItem01 className="t-head">{userKm} km</S.TableItem01>
            </S.UserRankingTable>
          </S.RankingGroup>
          <S.RankingGroup>
            <S.RankingTitle>전체 랭킹</S.RankingTitle>
            <S.UserRankingTable>
              <S.TableItem01 className="t-head">등수</S.TableItem01>
              <S.TableItem01 className="t-head">아이디</S.TableItem01>
              <S.TableItem01 className="t-head">이용거리</S.TableItem01>
              {monthlyAllUserRanking.map(
                (el: IAllUserRanking, index: number) => (
                  <Fragment key={index}>
                    <S.TableItem01>{index + 1} 등</S.TableItem01>
                    <S.TableItem01>{el.userId}</S.TableItem01>
                    <S.TableItem01>{getPrice(el.km)} km</S.TableItem01>
                  </Fragment>
                )
              )}
            </S.UserRankingTable>
          </S.RankingGroup>
        </S.RankingWrapper>
      )}
    </S.Wrapper>
  );
}
