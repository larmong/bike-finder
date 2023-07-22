import * as S from "./upload01.style";
import { IUploads01UI } from "./upload01.types";

export default function Uploads01UI(props: IUploads01UI) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          alt="업로드이미지"
        />
      ) : props.imgFile ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={props.imgFile}
          alt="미리보기이미지"
        />
      ) : (
        <S.UploadFile onClick={props.onClickUpload}>
          <img src="/images/input/upload.svg" alt="플러스" />
          <span>Upload</span>
        </S.UploadFile>
      )}
      <S.InputFile
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
