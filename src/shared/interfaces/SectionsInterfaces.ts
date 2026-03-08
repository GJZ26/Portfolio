import { AvailableLangs } from "../config/LangsAvailables";
import { DateRange, MonthYear, UnfinishedDateRange } from "./TimeInterface";

export type AboutData = string;
export type ExperienceData = Array<Experience>;
export type CertificateData = Array<Certificate>;
export type SideProjectData = Array<SideProject>;
export type LinksData = Array<LinkButton>;
export type modesAvailables = "remote" | "on_site" | "hybrid";

export interface Experience {
  company: string;
  role: string;
  description: string;
  duration: DateRange | UnfinishedDateRange;
  location?: Location;
  mode?: modesAvailables;
  skills?: Array<string>;
  uri?: string;
}

export interface Location {
  state?: string;
  country?: string;
}

export interface Certificate {
  badge?: string;
  title: string;
  date: MonthYear;
  issuer: string;
  skills?: Array<string>;
  uri: string;
}

export interface SideProject {
  title: string;
  year: number;
  description: string;
  image?: string;
  uri?: string;
}

export interface LinkButton {
  text: string;
  uri: string;
  icon?: Function;
}

export interface CVS {
  lang: AvailableLangs;
  uri: string;
}

export interface CVSData {
  main: CVS;
  secondary?: CVS;
}

export interface Info {
  image?: string;
  name: string;
  lastname: string;
  role: string;
  aka?: string; // Also know as
  location?: Location;
  sections: {
    about: AboutData;
    experiences: ExperienceData;
    certificates: CertificateData;
    side_project: SideProjectData;
    links: LinksData;
  };
  cvs?: CVSData;
}
