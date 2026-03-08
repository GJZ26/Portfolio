import { AvailableLangs } from "../config/LangsAvailables";
import { ThemesAvailables } from "../config/ThemesAvailables";
import { Info, modesAvailables } from "./SectionsInterfaces";
import { MonthsAvailables } from "./TimeInterface";

export interface LanguageTranslation
  extends Record<modesAvailables, string>,
    Record<keyof Info["sections"], string>,
    Record<ThemesAvailables, string> {
  language: string;
  theme: string;
  version: string;
  source: string;
  months: Record<MonthsAvailables, string>;
  title: string;
  present: string;
  empty_experience: string;
  empty_certificates: string;
  empty_side_projects: string;
  empty_links: string;
  skills: string;
  download_cv_in: string;
  year:{
    singular: string;
    plural: string;
  }
  month:{
    singular: string;
    plural: string;
  }
}

export type AppTranslation = Record<AvailableLangs, LanguageTranslation>;
export type TranslatedInfo = Record<AvailableLangs, Info>;