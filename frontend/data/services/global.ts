import qs from "qs";
import { globalQuery } from "../strapi-query/query";

export async function getGlobalData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
    if (!baseUrl) throw new Error("Missing NEXT_PUBLIC_STRAPI_BASE_URL");

    const url = new URL("api/global", baseUrl);
    url.search = qs.stringify(globalQuery);

    const response = await fetch(url.href, { cache: "no-store" });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(
        `Failed to fetch global data: ${response.status} ${response.statusText} ${errorText}`
      );
    }

    const data = await response.json();

    return data?.data ?? null;
  } catch (error) {
    console.error("getGlobalData error:", error);
    return null;
  }
}
