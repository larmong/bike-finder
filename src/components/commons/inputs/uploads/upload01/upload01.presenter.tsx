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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Finput%2Fupload.svg?alt=media&token=87399236-665d-4082-a597-6f8581d8da4c"
            alt="플러스"
          />
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
