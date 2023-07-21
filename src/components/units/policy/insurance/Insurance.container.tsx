import * as S from "./Insurance.style";
import { useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import {
  query,
  collection,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

export default function Insurance() {
  const [fetchInsurance, setFetchInsurance] = useState<string>("");
  useEffect(() => {
    const getInsuranceData = async () => {
      try {
        const data = await query(
          collection(db, "policy"),
          where(documentId(), "==", "insurance")
        );
        const getData = await getDocs(data);
        const result = getData.docs.map((doc) => ({
          ...doc.data(),
        }));

        setFetchInsurance(result[0].data);
      } catch (error) {
        console.error(error);
      }
    };
    void getInsuranceData();
  }, []);

  return (
    <S.Wrapper>
      <S.Text>
        1. 공공자전거 종합보험 안내
        <br />
        서울형 공공자전거의 이용자가 자전거를 대여하여 사용하는 중에 발생한
        사고에 대비하여 2022년 01월 01일로 (주)DB손해보험, 한화손해보험(주),
        (주)KB손해보험, (주)삼성화재해상보험, 현대해상화재보험(주) 공동
        보험계약을 체결함으로 아래와 같이 보장내용 및 청구방법을 안내드립니다.
        <br />
        <br />
        <S.Table01>
          <S.TableItem01 className="t-head">보험계약자</S.TableItem01>
          <S.TableItem01 className="t-left">서울시설공단</S.TableItem01>
          <S.TableItem01 className="t-head">피보험자</S.TableItem01>
          <S.TableItem01 className="t-left">
            서울 공공자전거 ‘따릉이’ 이용자
          </S.TableItem01>
          <S.TableItem01 className="t-head">수익자</S.TableItem01>
          <S.TableItem01 className="t-left">
            피보험자 본인(사망시 법정상속인)
          </S.TableItem01>
        </S.Table01>
        <br />
        공공자전거 종합보험 접수 및 처리절차
        <br />
        - 접수 : DB손해보험 (Tel : 02-1899-7751) ※ 서울시에서 사고 접수시 사고자
        및 보험사에 안내
        <br />
        - 처리 : 보험사에서 접수일로부터 7일이내 처리후 개별통보
        <br />
        - 보험금 지급사유별 첨부서류
        <br />
        <br />
        1. 공통서류 : 보험금청구서(사고장소 반드시 기재), 주민등록등(초)본,
        신분증사본, 통장사본, 초진진료차트, 공공자전거 대여사실 확인서 또는
        이용대장
        <br />
        ※ 미성년자(만19세미만)는 부모님중 한분의 신분증, 통장사본 제출
        <br />
        2. 사망 - 사망진단서(또는 사체검안서), 가족관계등록부, 가족관계증명서,
        대표자 위임장 및 법정상속인의 인감증명서(상속인이 다수인 경우 각각의
        인감날인 및 인감증명서 필요), 기타 가족관계에 따라 혼인/입양/친양자
        관계증명서, 교통사고사실확인원(차대자전거 사고시)
        <br />
        3. 후유장해 - 입원 또는 치료병원에서 발급한 후유장해진단서, 운동장해인
        경우에는 AMA방식의 장해진단서(장애인복지법상의 장해진단서는 해당되지
        않음), 최초 및 최종필름 (X-ray 혹은 MRI 혹은 CT),
        교통사고사실확인원(차대자전거 사고시)
        <br />
        <br />
        <S.Table02>
          <S.TableItem02 className="t-head">제공목적</S.TableItem02>
          <S.TableItem02 className="t-head">제공항목</S.TableItem02>
          <S.TableItem02 className="t-head">보유기간</S.TableItem02>
          <S.TableItem02>공공자전거 상해사망</S.TableItem02>
          <S.TableItem02 className="t-left">
            보험기간중 공공자전거 이용중에 발생한 자전거 교통사고로 사망시
            (만15세 미만자 제외) ※타제도와 관계없이 중복보상
          </S.TableItem02>
          <S.TableItem02>2천만원</S.TableItem02>
          <S.TableItem02>공공자전거 후유장해</S.TableItem02>
          <S.TableItem02 className="t-left">
            보험기간중 공공자전거 이용중에 발생한 자전거 교통사고로
            후유장해시(3%~100%) ※타제도와 관계없이 중복보상
            <br />
            ※상해에 따른 치료비는 보상하지 않습니다.
          </S.TableItem02>
          <S.TableItem02>2천만원 한도</S.TableItem02>
          <S.TableItem02>
            ‘후유장해’라 함은 상해에 대하여 치유된후 신체에 남아있는 영구적인
            정신 또는 육체의 훼손상태를 말합니다.
          </S.TableItem02>
          <S.TableItem02>공공자전거 치료비</S.TableItem02>
          <S.TableItem02 className="t-left">
            보험기간중 공공자전거의 이용중에 발생한 우연한 사고(이하"사고")로
            인하여 치료시 가입금액 한도로 보상
          </S.TableItem02>
          <S.TableItem02>
            3백만원 한도
            <br />
            (본인부담금 10만원)
          </S.TableItem02>
          <S.TableItem02>공공자전거 사고배상책임</S.TableItem02>
          <S.TableItem02 className="t-left">
            보험기간중 공공자전거의 이용중에 발생한 사고로 인하여 타인의 신체에
            장해를 입히거나 타인의 재물을 망가뜨려 법률상의 배상책임을
            부담함으로써 입은 손해담보
          </S.TableItem02>
          <S.TableItem02>
            2백만원 한도
            <br />
            (본인부담금 10만원)
          </S.TableItem02>
          <S.TableItem02 className="t-left">
            ※ 공공자전거란?
            <br />
            공공자전거라 함은 공공자전거 사업자의 소유로 일정 조건에 맞는
            회원에게 대여되는 해당 자전거를 말하며, 여기에서 자전거란 핸들 또는
            페달을 이용하여 인력에 의하여 운전하는 2륜 이상의 차(레일에 의해
            운전하는 차, 신체장애자용 휠체어 및 유아용 3륜 이상의 차를 제외) 및
            그 부속품(적재물 포함)을 말합니다.
            <br />
            <br />
            ※공공자전거 이용중이란?
            <br />
            공공자전거를 대여하는 절차가 끝난 시점부터 반납하는 절차가 시작되는
            시점까지 공공자전거를 운행, 주·정차하는 행위 등을 말합니다. 운행하는
            행위, 주․정차하는 행위 등을 제외한 기타 공공자전거와 관련이 없는
            행위는 “이용”으로 보지 않습니다.
            <br />※ 단, 사고발생일자로부터 1년 이내에 발생한 치료비 보상 가능함.
          </S.TableItem02>
        </S.Table02>
        <br />
        <br />
        2. 영조물 배상공제 안내
        <br />
        <br />
        <S.Table03>
          <S.TableItem03 className="t-head">구분</S.TableItem03>
          <S.TableItem03 className="t-head">보장내용</S.TableItem03>
          <S.TableItem03 className="t-head">보장한도액</S.TableItem03>
          <S.TableItem03>공공자전거 이용중 대인 사고</S.TableItem03>
          <S.TableItem03 className="t-left">
            공공자전거 이용중 공공자전거 결함, 관리상 하자로 인해 이용자 본인 및
            제3자의 신체가 장해를 입은 경우 ※신체장해란 신체의 상해, 질병 및
            그로 인한 사망을 말합니다.
          </S.TableItem03>
          <S.TableItem03>1인당 1억원</S.TableItem03>
          <S.TableItem03>공공자전거 이용중 대물 사고</S.TableItem03>
          <S.TableItem03 className="t-left">
            공공자전거 이용중 공공자전거 결함, 관리상 하자로 인해 이용자 본인 및
            제3자의 재물이 망가진 경우
          </S.TableItem03>
          <S.TableItem03>사고당 3억원</S.TableItem03>
        </S.Table03>
        <br />
        영조물 손해배상 보험 접수 및 처리 안내
        <br />
        - 접수 : 공공자전거 사고 당사자 → 서울시설공단 (Tel : 02-1599-0120) →
        한국지방재정공제회※ 붙임 : 영조물 사고접수 양식에 따라 접수
        <br />
        - 처리 : 한국지방재정공제회의 위임을 받은 손해보험사에서 배상금 지급
        개별통지
        <br />
        <br />
        ※ 공공자전거 결함, 관리상 하자의 입증책임은 이용자 본인에게 있으므로,
        사고 발생 당시 반드시 증빙자료를 수집하여 영조물 손해배상 보험 접수 시
        첨부하여 주시기 바랍니다.
        <br />
        ※ 증빙자료 : 사고 직후 촬영한 자전거 사진 또는 동영상, 인적·물적 피해를
        증명할 수 있는 사진 등<br />
      </S.Text>
    </S.Wrapper>
  );
}
