import { z } from "zod";

export const signUpSchema = z
  .object({
    firstname: z
      .string({ required_error: "required" })
      .trim()
      .min(1, { message: "required" }),
    lastname: z
      .string({ required_error: "required" })
      .trim()
      .min(1, { message: "required" }),
    email: z
      .string({ required_error: "required" })
      .email("value")
      .min(1, { message: "required" }),
    password: z
      .string({ required_error: "required", invalid_type_error: "value" })
      .trim()
      .min(1, { message: "required" }),
    passwordConfirmation: z
      .string({ required_error: "required", invalid_type_error: "value" })
      .trim()
      .min(1, { message: "required" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Las contraseñas deben coincidir",
  });
