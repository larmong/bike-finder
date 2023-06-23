export interface IPropsAnimation02 {
  fetchInstagram: IFetchInstagram[];
  isFirstDivVisible: boolean;
  handleAnimationEnd: () => void;
}

export interface IFetchInstagram {
  id?: string | undefined;
  favorite: string;
  comment: string;
  image: string;
}

export interface IIsActive {
  isActive: boolean;
}
