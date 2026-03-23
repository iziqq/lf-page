import * as v from "valibot";

export const LoginVerifyResponseSchema = v.object({
  token: v.string(),
});

export type LoginVerifyResponse = v.InferOutput<typeof LoginVerifyResponseSchema>;
