import * as S from "./Section06.style";
import Title01 from "../../../commons/title/Title01.container";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

export default function Section06() {
  const titleData = {
    icon: <img src="/images/main/logo-icon.svg" alt="아이콘" />,
    title: "# 따릉이와 함께",
    dsc: "따릉이와 함께하는 서울",
  };

  const [fetchInstagram, setFetchInstagram] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getInstagramPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "instagram"));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchInstagram(data);
      } catch (error) {
        console.error(error);
      }
    };
    getInstagramPosts();
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Section>
          <Title01
            icon={titleData.icon}
            title={titleData.title}
            dsc={titleData.dsc}
          />
          <S.Contents>
            {fetchInstagram?.map((el: any, index: number) => (
              <S.Instagram key={index}>
                <S.InstagramImage src={el?.image} alt="InstagramImage" />
                <S.InstagramData>
                  <S.InstagramDataFavorite>
                    <S.Favorite></S.Favorite>
                    {el?.like}
                  </S.InstagramDataFavorite>
                  <S.InstagramDataComment>
                    <S.Comment></S.Comment>
                    {el?.comment}
                  </S.InstagramDataComment>
                </S.InstagramData>
              </S.Instagram>
            ))}
          </S.Contents>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
}
