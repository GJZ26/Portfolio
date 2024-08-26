export interface HourRange {
  start_hour: string;
  end_hour: string;
}

export type MonthsAvailables =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export interface MonthYear {
  month: MonthsAvailables;
  year: number;
}

export interface DateRange {
  current: boolean;
  init: MonthYear;
  end: MonthYear;
}
