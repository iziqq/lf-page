import * as v from "valibot";
import {EmailSchema} from "@/common/domains/email-address.ts";
export const LoginVerifyRequestSchema = v.object({
  email: EmailSchema,
  code: v.pipe(
    v.string(),
    v.length(6),
    v.digits()
  )
});

export type LoginVerifyRequest = v.InferOutput<typeof LoginVerifyRequestSchema>;
