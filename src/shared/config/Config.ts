/**************************************************************************
 *
 * Configuration section
 *
 * In this section you will be able to configure some things about the website.
 * The attributes with the ? sign indicate that they can be omitted, so there should be no problem if you delete them.
 * Do not create a new file, it overwrites these pre-existing settings for your project.
 *
 **************************************************************************/

import { Config } from "../interfaces/ConfigInterface";
import { version } from "../../../package.json";

export const defaultConfig: Config = {
  version, // Application version, do not MANUALLY MODIFY
  global: {
    translatable: true, // Show the option to change languages
    allowChangeTheme: true, // Show the option to change themes
    defaultTheme: "alba_sky", // Default theme (the one that will be displayed when opening the website for the first time)
    defaultLang: "en", // Default language (The language that will be displayed by default)
    useSystemThemeScheme: true, // Use system theme scheme
    useSystemLanguage: true, // Use system language
    showCredit: true, // Show the year and the creator's nickname in the footer (Giving credits is important)
    showVersion: true, // Show version in footer
    showSource: true, // Show link to source code
    showMinimap: true, // Show navigation map
    inactiveHours: {
      start_hour: "00:00", // Inactivity start time (in 24-hour format)
      end_hour: "12:00", // End of inactivity time (in 24-hour format)
    },
    timeZone: "America/Mexico_City",
    favicon: "./vite.svg", // Icon tab
  },
  head: {
    // Section where your name appears
    showTimeZone: true, // Show your time zone
    indicateStatus: true, // Show your schedule when you are not available
  },
  experience: {
    abreviate_month: true, // Render the full name of the months or just the first three letters of them
    max_skills_listed: 3, // Maximum number of skills to render
    showDurationText: true, // Show the duration of each experience in text format (e.g. "2 years and 3 months")
  },
  links: {
    // Link section to your networks
    showCV: true, // Generate and allow you to download your CV
  },
};
