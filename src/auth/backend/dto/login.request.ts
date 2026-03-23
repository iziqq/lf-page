import * as v from "valibot";
import {EmailSchema} from "@/common/domains/email-address.ts";
import {PasswordSchema} from "@/common/domains/password.ts";
export const LoginRequestSchema = v.object({
  email: EmailSchema,
  password: PasswordSchema
});

export type LoginRequest = v.InferOutput<typeof LoginRequestSchema>;
