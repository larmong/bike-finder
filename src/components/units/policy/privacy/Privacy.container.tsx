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
      <S.Text>
        &lt;서울자전거 따릉이&gt;('www.bikeseoul.com') 는 개인정보보호법에 따라
        이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의
        고충을 원활하게 처리할 수 있도록 다음해과 같은 처리방침을 두고 있습니다.
        <br />
        <br />
        &lt;서울자전거 따릉이&gt;('www.bikeseoul.com') 는 개인정보보호법에 따라
        이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의
        고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
        <br />
        <br />
        1. 개인정보의 처리목적 &lt;서울자전거 따릉이&gt;('www.bikeseoul.com') 는
        개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의
        목적이외의 용도로는 사용되지 않으며 이용 목적이 변경되는 경우에는
        개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
        예정입니다.
        <span>
          <em>가. 홈페이지,앱 회원가입 및 관리</em>
          회원 가입의사 확인, 정기권(일일회원권) 제공에 따른 본인식별․인증,
          회원자격 유지•관리, 만 15세 미만 아동 개인정보 수집 시 법정대리인의
          동의 여부 확인, 고충 처리, 자전거 분실에 따른 분쟁 조정을 위한 기록
          보존의 목적으로 개인정보를 처리합니다.
          <em>나. 결제관리</em>
          자전거 이용에 관한 계약 이행, 요금정산, 자전거 대여•반납에 따른 이용료
          결제, 본인 인증, 요금 추심 등의 목적으로 개인정보를 처리합니다.
          <em>다. 민원사무 처리</em>
          서울자전거 따릉이 홈페이지 내 시민 의견 수렴을 위한 신원 확인, 의견
          사항 확인, 의견에 대한 처리결과 통보를 목적으로 개인정보를 처리합니다.
          <em>라. 신규 서비스 개발</em>
          신규 서비스 개발․맞춤형 서비스제공, 빅데이터 분석에 따른 서비스 개발의
          목적으로 개인정보를 처리합니다.
          <em>마. 이벤트 및 마케팅 행사 진행시 개인정보 활용</em>
          이벤트 정보 및 참여기회 제공, 광고성 정보 제공, 이용자 특성에 따른
          서비스 제공, 광고 게재 등 마케팅 및 프로모션 목적으로 개인정보를
          이용합니다.
        </span>
        <br />
        2. 개인정보 파일 현황 ①&lt;서울자전거 따릉이&gt;('www.bikeseoul.com') 가
        개인정보보호법 제32조에 따라 등록․공개하는 개인정보파일의 처리 목적은
        다음과 같습니다.
        <span>
          <em>가. 개인정보파일명 : 서울자전거 따릉이 회원정보</em>
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
        </span>
        <br />
        3. 개인정보의 처리 및 보유 기간 ① &lt;서울자전거
        따릉이&gt;('www.bikeseoul.com') 는 개인정보 보유, 이용기간 또는 정보
        주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서
        개인정보를 처리, 보유 합니다.
        <br />
        각각의 개인정보 처리 및 보유기간은 다음과 같습니다.
        <br />
        <br />
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
        <br />
        4. 개인정보의 제3자 제공에 관한 사항
        <br />
        ① &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 정보주체의 동의,
        법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는
        경우에만 개인정보를 제3자에게 제공합니다.
        <br />
        ② &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 다음과 같이 마케팅
        프로모션을 위하여 아래와 같이 정보주체로부터 동의를 받은 경우에 한하여
        제3자에게 제공합니다.
        <br />
        <br />
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
        <br />
        <br />
        5. 개인정보처리의 위탁
        <br />
        ① &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 다음과 같이 개인정보
        처리업무를 위탁하고 있습니다.
        <br />
        ② &lt;서울자전거 따릉이&gt;(‘www.bikeseoul.com’)는 다음과 같이 마케팅
        프로모션을 위하여 아래와 같이 정보 주체로부터 동의를 받은 경우에 한하여
        제3자에게 제공합니다.
        <br />
        <br />
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
        <br />
        <br />
        6. 정보주체와 법정대리인의 권리‧의무 및 그 행사방법에 관한 사항
        <br />
        ① 정보주체는 &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')에 대해
        언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수
        있습니다.
        <br />
        ② 제1항에 따른 권리 행사는 &lt;서울자전거
        따릉이&gt;('www.bikeseoul.com') 에 대해 개인정보 보호법 시행령
        제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수
        있으며 &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 이에 대해 지체
        없이 조치하겠습니다.
        <br />
        ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
        대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지
        제11호 서식에 따른 위임장을 제출하셔야 합니다.
        <br />
        ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조
        제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
        <br />
        ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
        대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
        <br />
        ⑥ &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 정보주체 권리에 따른
        열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가
        본인이거나 정당한 대리인인지를 확인합니다. * [개인정보보호법 시행규칙
        별지 제11호] 위임장
        <br />
        <br />
        7. 처리하는 개인정보의 항목 작성
        <br />
        &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 다음의 개인정보 항목을
        처리하고 있습니다.
        <br />
        <br />
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
        <br />
        <br />
        8. 개인정보 파기 절차 및 방법
        <br />
        ① &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')은 원칙적으로 개인정보
        처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다.
        <br />
        ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
        달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는
        경우에는 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를
        달리하여 보존합니다.
        <br />
        ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
        <br />
        <span>
          <em>가. 파기절차</em>
          이용자가 입력한 정보는 목적 달성 후 별도의 DB 에 옮겨져(종이의 경우
          별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장 후 혹은
          즉시 파기 됩니다. 이때 DB로 옮겨진 개인정보는 법률에 의한 경우가
          아니고서는 다른 목적으로 이용되지 않습니다.
          <br />
          불필요한 개인정보 및 개인정보파일은 개인정보책임자의 책임 하에
          내부방침 절차에 따라 다음과 같이 처리하고 있습니다.
          <br />
          - 개인정보의 파기: 보유기간이 경과한 개인정보는 종료일로부터 지체 없이
          파기합니다.
          <br />- 개인정보파일의 파기: 개인정보파일의 처리 목적 달성, 해당
          서비스의 폐지, 사업의 종료 등 그 개인정보파일이 불필요하게 되었을
          때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 지체 없이
          그 개인정보파일을 파기합니다.
          <em>나. 파기방법</em>
          1) 전자적 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
          사용합니다. 2) 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을
          통하여 파기합니다.
          <br />
        </span>
        <br />
        <br />
        9. 개인정보 자동 수집 장치의 설치‧운영 및 거부에 관한 사항
        <br />
        ① &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 개별적인 맞춤서비스를
        제공하기 위해 이용정보를 저장하고 수시로 불러오는 쿠키(cookie)를
        사용합니다.
        <br />
        ② 쿠키는 웹사이트를 운영하는데 이용하는 서버(http)가 이용자의 컴퓨터
        브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드
        디스크에 저장되기도 합니다.
        <br />
        <span>
          <em>가. 쿠키의 사용 목적</em>
          이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기
          검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을
          위해 사용됩니다.
          <em>나. 쿠키의 설치,운영 및 거부</em>
          웹브라우저 상단의 도구 - 인터넷 옵션 - 개인정보 메뉴의 옵션 설정을
          통해 쿠키 저장을 거부 할 수 있습니다.
          <em>다. 쿠키 저장을 거부</em>
          쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
          있습니다.
        </span>
        <br />
        10. 개인정보의 안전성 확보 조치
        <br />
        &lt;서울자전거 따릉이&gt;('www.bikeseoul.com')는 개인정보보호법 제
        29조에 따라 다음과 같이 안전성 확보에 필요한 기술적, 관리적, 물리적
        조치를 하고 있습니다.
        <br />
        ① 관리적 조치
        <br />
        내부관리계획 수립 시행, 정기적 직원 교육 등<br />
        ② 기술적 조치
        <br />
        개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 접속기록의
        보관 및 위변조 방지, 비밀번호 등의 암호화, 보안프로그램 설치
        <br />
        ③ 물리적 조치
        <br />
        전산실, 자료보관실 등의 접근통제
        <br />
        <br />
        11. 권익침해 구제방법
        <br />
        정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을
        문의하실 수 있습니다.
        <br />
        *아래의 기관은 개인정보보호 종합 포털과는 별개의 기관으로서,
        개인정보보호 종합포털의 자체적인 개인정보 불만처리, 피해구제 결과에
        만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기
        바랍니다.
        <br />
        <br />
        ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
        <br />
        소관업무 : 개인정보 침해사실 신고, 상담 신청
        <br />
        홈페이지 : privacy.kisa.or.kr
        <br />
        전화 : (국번없이) 118
        <br />
        주소 : 전라남도 나주시 진흥길 9 한국인터넷진흥원
        <br />
        <br />
        ▶ 개인정보 분쟁조정위원회
        <br />
        소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
        <br />
        홈페이지 : www.kopico.go.kr
        <br />
        전화 : 1833-6972
        <br />
        주소 : 서울특별시 종로구 세종대로 209 정부서울청사 4층
        <br />
        <br />
        ▶ 대검찰청 사이버범죄수사단 : (국번없이) 1301, cid@spo.go.kr
        (www.spo.go.kr)
        <br />
        <br />
        ▶ 경찰청 사이버안전국 : (국번없이) 182 (cyberbureau.police.go.kr)
        <br />
        <br />
        또한, 개인정보의 열람, 정정·삭제, 처리정지 등에 대한 정보주체자의 요구에
        대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을
        침해 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수
        있습니다.
        <br />
        중앙행정심판위원회(www.simpan.go.kr)
        <br />
        <br />
        12. 개인정보 열람청구
        <br />
        ① 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의
        부서에 할 수 있습니다. 행정안전부는 정보주체의 개인정보 열람청구가
        신속하게 처리되도록 노력하겠습니다.
        <br />
        <br />
        ▶ 개인정보 열람청구 접수· 처리부서
        <br />
        부서명 : 서울시설공단 IT전략실
        <br />
        담당자 : 정 명 재<br />
        연락처 : &lt;전화번호 02-2290-6930&gt;, &lt;이메일
        mccheong@sisul.or.kr&gt;
        <br />
        ② 정보 주체께서는 제1항의 열람청구 접수·처리부서 이외에, 행정안전부의
        ‘개인정보보호 종합 포털’ 웹사이트(www.privacy.go.kr)를 통하여서도
        개인정보 열람청구를 하실 수 있습니다.
        <br />
        ▶ 행정안전부 개인정보보호 종합포털 → 개인정보 민원 → 개인정보 열람등
        요구
        <br />
        <br />
        13.개인정보 “분야별” 책임관 및 담당자 연락처
        <br />
        ① &lt;서울자전거 따릉이&gt;('www.bikeseoul.com') 는 개인정보를 보호하고
        개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자
        및 실무담당자를 지정하고 있습니다. (개인정보보호법 제31조 제1항에 따른
        개인정보 보호 책임자)
        <br />
        <br />
        ▶ 개인정보보호 책임자
        <br />
        부서명 : 서울시설공단 경영전략본부
        <br />
        담당자 : 권 순 만<br />
        연락처 : &lt;전화번호 02-2290-7100&gt;, &lt;이메일
        ksmsoon@sisul.or.kr&gt;
        <br />
        <br />
        ▶ 개인정보 분야별 책임관
        <br />
        부서명 : 서울시설공단 공공자전거운영처
        <br />
        담당자 : 오 정 우<br />
        연락처 : &lt;전화번호 02-2290-4610&gt;, &lt;이메일 jwoh@sisul.or.kr&gt;
        <br />
        <br />
        ▶ 개인정보 보호 담당자
        <br />
        부서명 : 서울시설공단 공공자전거운영처
        <br />
        담당자 : 정 혁<br />
        연락처 : &lt;전화번호 02-2290-6084&gt;, &lt;이메일
        jungh093@sisul.or.kr&gt;
        <br />
        * 정보 주체께서는 &lt;서울자전거 따릉이&gt; 의 서비스(또는 사업)을
        이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제
        등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
        &lt;서울자전거 따릉이&gt; 는 정보주체의 문의에 대해 지체 없이 답변 및
        처리해드릴 것입니다.
        <br />
        <br />
        14. 동의를 거부할 권리 여부 및 동의 거부에 따른 불이익 여부
        <br />
        ① 개인정보보호법 제15조2항4호에 의거 개인정보보유주체는 개인정보 수집에
        대한 동의를 거부할 권리가 있으며, 동의 거부시 &lt;서울자전거
        따릉이&gt;('www.bikeseoul.com')를 이용할 수 없음을 고지 드립니다.
        <br />
      </S.Text>
    </S.Wrapper>
  );
}
