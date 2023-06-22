import { useState } from "react";
import Terms from "../terms/Terms.container";
import UserAuth from "../userAuth/UserAuth.container";
import Membership from "../membership/Membership.container";
import JoinSuccess from "../joinSuccess/JoinSuccess.container";

export default function General() {
  const [terms, setTerms] = useState<boolean>(true);
  const [userAuth, setUserAuth] = useState<boolean>(true);
  const [joinSuccess, setJoinSuccess] = useState<boolean>(false);

  return (
    <>
      {terms && !userAuth && !joinSuccess ? (
        <UserAuth setUserAuth={setUserAuth} />
      ) : terms && userAuth && !joinSuccess ? (
        <Membership setJoinSuccess={setJoinSuccess} />
      ) : terms && userAuth && joinSuccess ? (
        <JoinSuccess />
      ) : (
        <Terms setTerms={setTerms} />
      )}
    </>
  );
}
