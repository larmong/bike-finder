import Terms from "../terms/Terms.container";
import { useEffect, useState } from "react";
import UserAuth from "../userAuth/UserAuth.container";

export default function Minor() {
  const [progress, setProgress] = useState(false);
  const [terms, setTerms] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  // useEffect(() => {});

  console.log(terms);
  return <>{terms ? <UserAuth /> : <Terms setTerms={setTerms} />}</>;
}
