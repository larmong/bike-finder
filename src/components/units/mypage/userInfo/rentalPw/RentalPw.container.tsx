import * as S from "./RentalPw.style";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { useState } from "react";
import Button01 from "../../../../commons/buttons/button01/Button01.container";
import Input03 from "../../../../commons/inputs/input/input03/input03.container";
import {
  collection,
  documentId,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { IPropsRentalPw } from "./RentalPw.types";
import {
  Table01,
  TableItem01,
} from "../../../../commons/tables/table/Table.style";

export default function RentalPw(props: IPropsRentalPw) {
  const [rentalPw, setRentalPw] = useState({
    rentalPassword: "",
    changeRentalPw: "",
    changeRentalPwCheck: "",
  });

  const onChangeUserInfo = (value: string, id: string) => {
    setRentalPw({
      ...rentalPw,
      [id]: value,
    });
  };

  const onClickButton = async () => {
    if (props.fetchUser.rentalPassword === rentalPw.rentalPassword) {
      if (
        rentalPw.changeRentalPw !== "" ||
        rentalPw.changeRentalPwCheck !== ""
      ) {
        if (rentalPw.changeRentalPw === rentalPw.changeRentalPwCheck) {
          try {
            const data = query(
              collection(db, "user"),
              where(documentId(), "==", props.fetchUser.id)
            );
            const result = await getDocs(data);
            result.forEach((doc) => {
              setDoc(doc.ref, {
                ...props.fetchUser,
                rentalPassword: rentalPw.changeRentalPw,
              });
            });
            alert("회원님의 대여 비밀번호가 변경되었습니다.");
          } catch (error) {}
        } else {
          alert("변경할 대여 비밀번호가 같지 않습니다!");
        }
      } else {
        alert("변경할 비밀번호를 입력해주세요!");
      }
    } else {
      alert("기존 비밀번호를 확인해주세요!");
    }
  };

  return (
    <S.Wrapper>
      <S.Message>
        대여 비밀번호는 자전거 대여시 단말기에 입력하는 정보입니다.
        <br /> 연속된 4개의 숫자는 피해주세요.
      </S.Message>
      <Table01 className="rentalPw">
        <TableItem01 className="t-head">기존 대여 비밀번호</TableItem01>
        <TableItem01>
          <Input03
            inputId="rentalPassword"
            inputMaxLength={4}
            onChangeNumber={onChangeUserInfo}
            valueData={rentalPw.rentalPassword}
            placeholderData="기존 대여 비밀번호 4자리를 입력해주세요."
          />
        </TableItem01>
        <TableItem01 className="t-head">변경할 대여 비밀번호</TableItem01>
        <TableItem01>
          <Input03
            inputId="changeRentalPw"
            inputMaxLength={4}
            onChangeNumber={onChangeUserInfo}
            valueData={rentalPw.changeRentalPw}
            placeholderData="변경할 대여 비밀번호 4자리를 입력해주세요."
          />
        </TableItem01>
        <TableItem01 className="t-head">변경할 대여 비밀번호 확인</TableItem01>
        <TableItem01>
          <Input03
            inputId="changeRentalPwCheck"
            inputMaxLength={4}
            onChangeNumber={onChangeUserInfo}
            valueData={rentalPw.changeRentalPwCheck}
            placeholderData="변경할 대여 비밀번호 4자리를 재입력해주세요."
          />
        </TableItem01>
      </Table01>
      <Button01
        onClickButton={onClickButton}
        btnWidth="200px"
        btnText="변경하기"
      />
    </S.Wrapper>
  );
}
