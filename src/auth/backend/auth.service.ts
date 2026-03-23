import type {LoginRequest} from "@/auth/backend/dto/login.request.ts";
import {post} from "@/common/api.ts";
import type {LoginVerifyRequest} from "@/auth/backend/dto/login-verify.request.ts";
import type {LoginVerifyResponse} from "@/auth/backend/dto/login-verify.response.ts";

export async function loginAsync(request: LoginRequest){
  return await post("/auth/login", request);
}

export async function verifyLoginAsync(request: LoginVerifyRequest): Promise<LoginVerifyResponse>{
  return await post<LoginVerifyResponse>("/auth/login/2fa/verify", request);
}
