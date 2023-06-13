import Terms from "../terms/Terms.container";
import { useState } from "react";
import UserAuth from "../userAuth/UserAuth.container";
import Membership from "../membership/Membership.container";

export default function Minor() {
  const [progress, setProgress] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [userAuth, setUserAuth] = useState<boolean>(false);
  const [joinSuccess, setJoinSuccess] = useState<boolean>(false);

  console.log(terms);
  return (
    <>
      {terms && !userAuth && !joinSuccess ? (
        <UserAuth setUserAuth={setUserAuth} />
      ) : terms && userAuth && !joinSuccess ? (
        <Membership setJoinSuccess={setJoinSuccess} />
      ) : terms && userAuth && joinSuccess ? (
        "" // 회원가입 성공 페이지
      ) : (
        <Terms setTerms={setTerms} />
      )}
    </>
  );
}
