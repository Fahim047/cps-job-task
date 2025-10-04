import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createStrapiURL(url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
  return baseUrl + url;
}

export async function getStrapiData(url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
