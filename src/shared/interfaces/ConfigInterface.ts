import { AvailableLangs } from "../config/LangsAvailables";
import { ThemesAvailables } from "../config/ThemesAvailables";
import { HourRange } from "./TimeInterface";
import { TimeZone } from "./TimeZones";

export interface Config {
  readonly version: string;
  global: {
    translatable: boolean;
    allowChangeTheme: boolean;

    defaultTheme: ThemesAvailables;
    defaultLang: AvailableLangs;

    useSystemThemeScheme:boolean;
    useSystemLanguage: boolean;

    showCredit: boolean;
    showVersion: boolean;
    showSource: boolean;
    showMinimap: boolean;

    timeZone?: TimeZone;
    inactiveHours?: HourRange;

    favicon?: string;
  };

  head: {
    showTimeZone: boolean;
    indicateStatus: boolean;
  };
  experience: {
    max_skills_listed: number;
    abreviate_month: boolean;
    showDurationText: boolean;
  };
  links: {
    showCV: boolean;
  };
}
