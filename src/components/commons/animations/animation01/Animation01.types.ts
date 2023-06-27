export interface IPropsAnimation01 {
  COMPANY_LIST: ICompanyList[];
  isFirstDivVisible: boolean;
  handleAnimationEnd: () => void;
}

export interface ICompanyList {
  name_ko: string;
  name_en: string;
}

export interface IIsActive {
  isActive: boolean;
}
