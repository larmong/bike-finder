export interface IPropsAnimation02 {
  fetchInstagram: IFetchInstagram[];
  isFirstDivVisible: boolean;
  handleAnimationEnd: () => void;
}

export interface IFetchInstagram {
  favorite: string;
  comment: string;
  image: string;
}
