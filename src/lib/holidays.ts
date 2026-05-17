// Static curated holidays for popular countries (2026). Auto-generated countdowns done in UI.
export interface Holiday {
  date: string; // ISO YYYY-MM-DD
  name: string;
  type: "national" | "religious" | "festival" | "observance";
}

export const HOLIDAYS: Record<string, { name: string; flag: string; holidays: Holiday[] }> = {
  IN: {
    name: "India",
    flag: "🇮🇳",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "observance" },
      { date: "2026-01-14", name: "Makar Sankranti / Pongal", type: "festival" },
      { date: "2026-01-26", name: "Republic Day", type: "national" },
      { date: "2026-02-15", name: "Maha Shivaratri", type: "religious" },
      { date: "2026-03-04", name: "Holi", type: "festival" },
      { date: "2026-03-21", name: "Eid al-Fitr", type: "religious" },
      { date: "2026-04-03", name: "Good Friday", type: "religious" },
      { date: "2026-04-14", name: "Ambedkar Jayanti", type: "national" },
      { date: "2026-05-27", name: "Eid al-Adha", type: "religious" },
      { date: "2026-08-15", name: "Independence Day", type: "national" },
      { date: "2026-08-26", name: "Janmashtami", type: "festival" },
      { date: "2026-10-02", name: "Gandhi Jayanti", type: "national" },
      { date: "2026-10-20", name: "Dussehra", type: "festival" },
      { date: "2026-11-08", name: "Diwali", type: "festival" },
      { date: "2026-11-24", name: "Guru Nanak Jayanti", type: "religious" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" },
    ],
  },
  US: {
    name: "United States",
    flag: "🇺🇸",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-01-19", name: "Martin Luther King Jr. Day", type: "national" },
      { date: "2026-02-16", name: "Presidents' Day", type: "national" },
      { date: "2026-05-25", name: "Memorial Day", type: "national" },
      { date: "2026-06-19", name: "Juneteenth", type: "national" },
      { date: "2026-07-04", name: "Independence Day", type: "national" },
      { date: "2026-09-07", name: "Labor Day", type: "national" },
      { date: "2026-10-12", name: "Columbus Day", type: "national" },
      { date: "2026-11-11", name: "Veterans Day", type: "national" },
      { date: "2026-11-26", name: "Thanksgiving", type: "national" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" },
    ],
  },
  GB: {
    name: "United Kingdom",
    flag: "🇬🇧",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-04-03", name: "Good Friday", type: "religious" },
      { date: "2026-04-06", name: "Easter Monday", type: "religious" },
      { date: "2026-05-04", name: "Early May Bank Holiday", type: "national" },
      { date: "2026-05-25", name: "Spring Bank Holiday", type: "national" },
      { date: "2026-08-31", name: "Summer Bank Holiday", type: "national" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" },
      { date: "2026-12-28", name: "Boxing Day (substitute)", type: "national" },
    ],
  },
  AE: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-03-21", name: "Eid al-Fitr", type: "religious" },
      { date: "2026-05-27", name: "Eid al-Adha", type: "religious" },
      { date: "2026-06-16", name: "Islamic New Year", type: "religious" },
      { date: "2026-08-25", name: "Prophet Muhammad's Birthday", type: "religious" },
      { date: "2026-12-02", name: "National Day", type: "national" },
    ],
  },
  AU: {
    name: "Australia",
    flag: "🇦🇺",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-01-26", name: "Australia Day", type: "national" },
      { date: "2026-04-03", name: "Good Friday", type: "religious" },
      { date: "2026-04-25", name: "ANZAC Day", type: "national" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" },
      { date: "2026-12-26", name: "Boxing Day", type: "national" },
    ],
  },
};
