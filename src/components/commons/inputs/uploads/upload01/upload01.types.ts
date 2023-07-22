import { ChangeEvent, RefObject } from "react";

export interface IUploads01 {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}
export interface IUploads01UI {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  imgFile: string | null;
}
