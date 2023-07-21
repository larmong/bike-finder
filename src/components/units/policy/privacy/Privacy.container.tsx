import * as S from "./Privacy.style";
import { useEffect, useState } from "react";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import {
  query,
  collection,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

export default function Privacy() {
  const [fetchPrivacy, setFetchPrivacy] = useState<string>("");
  useEffect(() => {
    const getPrivacyData = async () => {
      try {
        const data = await query(
          collection(db, "policy"),
          where(documentId(), "==", "privacy")
        );
        const getData = await getDocs(data);
        const result = getData.docs.map((doc) => ({
          ...doc.data(),
        }));

        setFetchPrivacy(result[0].data);
      } catch (error) {
        console.error(error);
      }
    };
    void getPrivacyData();
  }, []);

  return (
    <S.Wrapper>
      <S.Text>{fetchPrivacy}</S.Text>
      <S.Table01>
        {/* 일반회원 */}
        <S.TableItem01 className="t-head">
          일반회원 (만 14세 이상)
        </S.TableItem01>
        <S.TableItem01 className="t-head">개인정보항목</S.TableItem01>
        <S.TableItem01 className="t-left strong">
          (필수) 휴대번호, 아이디, 비밀번호, 전자메일주소, 생년, 성별
        </S.TableItem01>
        <S.TableItem01 className="t-left">
          (선택) 체중, 후불교통카드정보, 대여카드정보, 환불계좌정보
        </S.TableItem01>
        <S.TableItem01 className="t-head">보유근거</S.TableItem01>
        <S.TableItem01 className="t-left">정보주체동의</S.TableItem01>
        <S.TableItem01 className="t-head">보유기간</S.TableItem01>
        <S.TableItem01 className="t-left">
          회원 탈퇴 시까지(2년마다 재동의가 요구됨) 의무 보유기간 종료 시
        </S.TableItem01>
        {/* 만 13세 회원 */}
        <S.TableItem01 className="t-head">만 13세 회원</S.TableItem01>
        <S.TableItem01 className="t-head">개인정보항목</S.TableItem01>
        <S.TableItem01 className="t-left strong">
          (본인) 휴대번호, 아이디, 비밀번호, 전자메일주소, 생년, 성별
          <br />
          (법정 대리인) 성별, 생년월일, 휴대폰번호, 중복가입정보(DI)
        </S.TableItem01>
        <S.TableItem01 className="t-head">보유근거</S.TableItem01>
        <S.TableItem01 className="t-left">정보주체동의</S.TableItem01>
        <S.TableItem01 className="t-head">보유기간</S.TableItem01>
        <S.TableItem01 className="t-left">
          회원 탈퇴 시까지(2년마다 재동의가 요구됨)
          <br />
          의무 보유기간 종료 시
        </S.TableItem01>
        {/* SNS 회원 */}
        <S.TableItem01 className="t-head">SNS 회원</S.TableItem01>
        <S.TableItem01 className="t-head">개인정보항목</S.TableItem01>
        <S.TableItem01 className="t-left strong">
          (필수) 휴대번호, 아이디, 비밀번호, 생년, 성별, <br />
          SNS(네이버,카카오) 계정(전자메일주소, 중복가입정보)
        </S.TableItem01>
        <S.TableItem01 className="t-head">보유근거</S.TableItem01>
        <S.TableItem01 className="t-left">
          (선택) 체중, 후불교통카드정보, 대여카드정보, 환불계좌정보
        </S.TableItem01>
        <S.TableItem01 className="t-head">보유기간</S.TableItem01>
        <S.TableItem01 className="t-left">정보주체동의</S.TableItem01>
        <S.TableItem01 className="t-left">
          회원 탈퇴 시까지(2년마다 재동의가 요구됨)
          <br />
          의무 보유기간 종료 시
        </S.TableItem01>
      </S.Table01>
      <S.Table02>
        <S.TableItem02 className="t-head">순번</S.TableItem02>
        <S.TableItem02 className="t-head">개인정보파일의명칭</S.TableItem02>
        <S.TableItem02 className="t-head">보유정보</S.TableItem02>
        <S.TableItem02 className="t-head">보유기간</S.TableItem02>
        <S.TableItem02 className="t-head">보유근거</S.TableItem02>
        <S.TableItem02>1</S.TableItem02>
        <S.TableItem02>서울자전거 따릉이 이용정보</S.TableItem02>
        <S.TableItem02>회원정보</S.TableItem02>
        <S.TableItem02>
          회원탈퇴시까지
          <br />
          (2년마다 재동의가 요구됨)
        </S.TableItem02>
        <S.TableItem02>정보주체동의</S.TableItem02>
        <S.TableItem02>환불처리정보</S.TableItem02>
        <S.TableItem02>5년</S.TableItem02>
        <S.TableItem02>
          전자상거래 등에서의 소비자보호에 관한 법률 시행령 제6조 (사업자가
          보존하는 거래기록의 대상 등)
        </S.TableItem02>
        <S.TableItem02>위치정보</S.TableItem02>
        <S.TableItem02>6개월</S.TableItem02>
        <S.TableItem02>위치기반 서비스 이용약관 동의</S.TableItem02>
      </S.Table02>
      <S.Table03>
        <S.TableItem03 className="t-head">순번</S.TableItem03>
        <S.TableItem03 className="t-head">제공하는자</S.TableItem03>
        <S.TableItem03 className="t-head">제공받는자</S.TableItem03>
        <S.TableItem03 className="t-head">제공목적</S.TableItem03>
        <S.TableItem03 className="t-head">제공항목</S.TableItem03>
        <S.TableItem03 className="t-head">보유기간</S.TableItem03>
        <S.TableItem03>1</S.TableItem03>
        <S.TableItem03>서울공공자전거</S.TableItem03>
        <S.TableItem03>(주)티머니</S.TableItem03>
        <S.TableItem03 className="t-left">
          티머니GO 앱의 따릉이 대여 서비스 연계
        </S.TableItem03>
        <S.TableItem03 className="t-left">
          따릉이 아이디, 휴대폰번호, 이메일주소, 결제이력, 대여이력
        </S.TableItem03>
        <S.TableItem03 className="t-left">
          제공 받는 자의 이용목적 종료 시 까지 또는 동의 철회 시 까지
        </S.TableItem03>
      </S.Table03>
      <S.Table04>
        <S.TableItem04 className="t-head">순번</S.TableItem04>
        <S.TableItem04 className="t-head">개인정보파일의명칭</S.TableItem04>
        <S.TableItem04 className="t-head">위탁명</S.TableItem04>
        <S.TableItem04 className="t-head">위탁업무내용</S.TableItem04>
        <S.TableItem04 className="t-head">위탁업체명</S.TableItem04>
        <S.TableItem04>1</S.TableItem04>
        <S.TableItem04>서울자전거 따릉이 회원정보</S.TableItem04>
        <S.TableItem04>공공자전거 대여시스템 유지보스</S.TableItem04>
        <S.TableItem04>홈페이지, 앱 프로그램 개선</S.TableItem04>
        <S.TableItem04>(주) 위트콤</S.TableItem04>
        <S.TableItem04>2</S.TableItem04>
        <S.TableItem04>서울자전거 따릉이 회원정보</S.TableItem04>
        <S.TableItem04>본인인증 처리</S.TableItem04>
        <S.TableItem04>
          법정대리인 실명인증
          <br />
          (나이스I-PIN, 홈페이지 인증)
        </S.TableItem04>
        <S.TableItem04>나이스평가정보(주)</S.TableItem04>
      </S.Table04>
      <S.Table05>
        <S.TableItem05 className="t-head">순번</S.TableItem05>
        <S.TableItem05 className="t-head">개인정보파일의명칭</S.TableItem05>
        <S.TableItem05 className="t-head">
          개인정보파일에 기록되는 개인정보의 항목
        </S.TableItem05>
        <S.TableItem05>1</S.TableItem05>
        <S.TableItem05>서울자전거 따릉이 회원정보</S.TableItem05>
        <S.TableItem05 className="t-left">
          (필수) 휴대번호, 아이디, 비밀번호, 전자메일주소, 생년, 성별
          <br />
          (선택)후불교통카드정보, 대여카드정보, 환불계좌 정보
        </S.TableItem05>
      </S.Table05>
    </S.Wrapper>
  );
}
