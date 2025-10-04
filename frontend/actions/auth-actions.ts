"use server";

import { createStrapiURL } from "@/lib/utils";
import { SignUpFormValues } from "@/lib/zod-schemas";

export async function registerUserAction(formValues: SignUpFormValues) {
  try {
    const url = createStrapiURL("/api/auth/local/register");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password,
        username: formValues.username,
        fullName: formValues.fullName,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.error.message || "Failed to register user",
      };
    }
    return {
      success: true,
      data,
      message: "User registered successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Unexpected error",
    };
  }
}
