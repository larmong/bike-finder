import Uploads01UI from "./upload01.presenter";
import { checkValidationImage } from "./upload01.validation";
import { useRef, ChangeEvent, useState } from "react";
import { IUploads01 } from "./upload01.types";

export default function Uploads01(props: IUploads01) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<string | null>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
        // props.onChangeFileUrls(reader.result as string, props.index);
      };
    } else {
      alert("이미지 파일이 아닙니다!!");
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <Uploads01UI
      imgFile={imgFile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
