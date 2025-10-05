import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";

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

export async function fetchStrapiData(path: string, query: object = {}) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
    if (!baseUrl) throw new Error("Missing NEXT_PUBLIC_STRAPI_BASE_URL");

    const url = new URL(path, baseUrl);
    if (Object.keys(query).length > 0) {
      url.search = qs.stringify(query);
    }

    const response = await fetch(url.href, { cache: "no-store" });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(
        `Failed to fetch ${path}: ${response.status} ${response.statusText} ${errorText}`
      );
    }

    const data = await response.json();
    return data?.data ?? null;
  } catch (error) {
    console.error(`fetchStrapiData error [${path}]:`, error);
    return null;
  }
}
