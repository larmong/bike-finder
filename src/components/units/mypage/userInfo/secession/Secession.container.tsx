import * as S from "./Secession.style";
import Button01 from "../../../../commons/buttons/button01/Button01.container";
import Select01 from "../../../../commons/inputs/select/select01/Select01.container";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  loginUidState,
  loginUserState,
} from "../../../../../commons/store/store";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { Notice } from "../../../../commons/notices/notice/Notice.style";

export default function Secession() {
  const router = useRouter();
  const SELECT_LIST = ["기타", "요금정책 불만", "개인정보", "서비스 불만족"];
  const [loginUserUid, setLoginUserUid] = useRecoilState(loginUidState);
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [selectReason, setSelectReason] = useState({
    type: "기타",
  });
  const onChangeReason = (value: string, id: string) => {
    setSelectReason({
      ...selectReason,
      [id]: value,
    });
  };

  const onClickButton = async () => {
    if (loginUserUid && loginUser) {
      const user = doc(collection(db, "users"), loginUserUid);
      const info = doc(collection(db, "user"), loginUser);
      try {
        alert("회원탈퇴가 완료되었습니다!");
        await deleteDoc(user);
        await deleteDoc(info);
        void router.push("/");
      } catch (error) {}
    }
  };

  return (
    <S.Wrapper>
      <Notice>
        · 탈퇴 신청 즉시 회원탈퇴 처리되며, 해당 아이디의 회원정보 및 마일리지는
        삭제처리되며, 복원할 수 없습니다.
        <br />
        · 회원탈퇴 이후 같은 아이디로는 재가입이 불가능 합니다.
        <br />
        · 이용권 기간이 남아있는 경우 즉시 탈퇴가 불가능 하오니 고객센터에 문의
        바랍니다.
        <br />
      </Notice>
      <S.Contents>
        <S.Message>
          <p>
            <em>회원탈퇴</em>를 신청합니다.
          </p>
          <span>
            서울자전거를 이용해 주셔서 감사합니다.
            <br />
            회원탈퇴를 하실 경우 위와 같이 안내드린대로 <br />
            회원정보가 처리됩니다.
          </span>
        </S.Message>
        <Select01
          inputId="type"
          SELECT_LIST={SELECT_LIST}
          cardType={selectReason.type}
          onClickSelectValue={onChangeReason}
        />
        <Button01
          onClickButton={onClickButton}
          btnWidth="200px"
          btnText="회원탈퇴"
        />
      </S.Contents>
    </S.Wrapper>
  );
}
