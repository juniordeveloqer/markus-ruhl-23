export enum SelectedPage {
    HOME = "home",
    ABOUTME = "aboutme",
    SUPPONSORS = "supponsors",
    PROGRAMS = "programs",
    PHOTOS ="photos",
    SUPPLAMENTS ="supplaments",
    ContactUs = "contactus",
  }
  
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }
  export type SwiperItemType = {
    imageSrc: string;
    imageAlt: string;
  }