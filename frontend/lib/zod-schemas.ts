import z from "zod";

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { error: "Full name must be at least 2 characters" }),
    email: z.email({ error: "Please enter a valid email address" }),
    username: z
      .string()
      .min(2, { error: "Username must be at least 2 characters" }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        error: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        error: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { error: "Password must contain at least one number" }),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      error: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  identifier: z.string({
    error: "Please enter a valid email address/username",
  }),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters" }),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
