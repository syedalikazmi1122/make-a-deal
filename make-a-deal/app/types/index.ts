export interface NavItem {
  name: string;
  link: string;
}
export interface navbarlistprops {
  title: string;
  navitems?: NavItem[];
}
export interface navbarbuttonprops {
  title:string;
  type?:string;
  disabled?:boolean;
  onClick?:()=>void;
}
// this component explains how these mentioned attributes will look like while using them in actuall code componet what will be there data types
