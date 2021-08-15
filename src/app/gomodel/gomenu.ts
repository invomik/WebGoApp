export interface IGoMenuItem {
  class: string;
  const_NAME: string;
  id: number;
  idgo_BDL: number;
  idgo_BDLITEM: number;
  idgo_USER: number;
  items: IGoMenuItem[];
  java_METHOD: string;
  lcl: string;
  menuitem: string;
  param: string;
  parentid: number;
  scp_ALIAS: string;
  scp_PARAM: string;
  text: string;
  tooltip: string;
}

export interface IGoMenu {
  user?: string;
  items?: IGoMenuItem[];
}
