import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateByLang(date: Date, lang: string = "en") {
  const months: Record<"es" | "en" | "sv", string[]> = {
    es: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    sv: [
      "januari",
      "februari",
      "mars",
      "april",
      "maj",
      "juni",
      "juli",
      "augusti",
      "september",
      "oktober",
      "november",
      "december",
    ],
  };

  const selectedLang: "es" | "en" | "sv" = (
    ["es", "en", "sv"].includes(lang) ? lang : "en"
  ) as "es" | "en" | "sv";

  const m = months[selectedLang][date.getMonth()];
  const d = date.getDate();
  const y = date.getFullYear();

  if (selectedLang === "es") return `${d} de ${m} de ${y}`;
  if (selectedLang === "sv") return `${d} ${m} ${y}`;
  return `${m} ${d}, ${y}`; // en
}
