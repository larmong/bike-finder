import ContactUI from "./Contact.presenter";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { loginUserState } from "../../../../commons/store/store";
import {
  CustomChangeEvent,
  CustomMouseEvent,
} from "../../../../commons/types/global.types";
import moment from "moment";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [loginUser] = useRecoilState<string | null>(loginUserState);
  const [cbValue, setCbValue] = useState(false);
  const [contactData, setContactData] = useState({
    title: "",
    content: "",
  });

  const onChangeTitle = (event: CustomChangeEvent) => {
    if (event) {
      setContactData({
        ...contactData,
        title: event.target.value,
      });
    }
  };

  const onChangeContent = (value: string) => {
    setContactData({
      ...contactData,
      content: value,
    });
  };

  const onClickCb = (event: CustomMouseEvent) => {
    const target = event.target as HTMLInputElement;
    setCbValue(target.checked);
  };

  const onClickSubmit = async () => {
    if (cbValue && contactData.title !== "" && contactData.content !== "") {
      try {
        const docRef = doc(collection(db, "faq"));
        await setDoc(docRef, {
          date: moment().format("YYYY-MM-DD HH:mm:ss"),
          userId: loginUser,
          title: contactData.title,
          content: contactData.content,
          answer: "",
          state: false,
        });
        alert("문의글이 등록되었습니다!");
        void router.push("/mypage/userInfo/faq");
      } catch (error) {}
    } else {
      alert("제목 또는 내용이 비어있습니다!");
    }
  };

  return (
    <ContactUI
      loginUser={loginUser}
      contactData={contactData}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickSubmit={onClickSubmit}
      onClickCb={onClickCb}
    />
  );
}
