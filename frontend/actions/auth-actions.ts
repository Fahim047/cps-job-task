"use server";

import { createStrapiURL } from "@/lib/utils";
import { SignInFormValues, SignUpFormValues } from "@/lib/zod-schemas";
import { cookies } from "next/headers";

const config = {
  path: "/",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  host: process.env.HOST,
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

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
    const cookieStore = await cookies();
    cookieStore.set("token", data.jwt, config);
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
export async function signInUserAction(formValues: SignInFormValues) {
  try {
    const url = createStrapiURL("/api/auth/local");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: formValues.identifier,
        password: formValues.password,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.error.message || "Failed to sign in",
      };
    }
    const cookieStore = await cookies();
    cookieStore.set("token", data.jwt, config);
    return {
      success: true,
      data,
      message: "User signed in successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Unexpected error",
    };
  }
}
