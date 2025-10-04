import { createStrapiURL } from "@/lib/utils";
import { cookies } from "next/headers";

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value;
}
export async function getAuthUser() {
  try {
    const token = await getAuthToken();
    if (!token) return null;
    const url = createStrapiURL("/api/users/me");
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch user");
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
