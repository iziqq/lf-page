import { defineStore } from 'pinia'
import type {LoginRequest} from "@/auth/backend/dto/login.request.ts";
import type {LoginVerifyRequest} from "@/auth/backend/dto/login-verify.request.ts";
import {loginAsync, verifyLoginAsync} from "@/auth/backend/auth.service.ts";

export const authStore = defineStore('auth', () => {

  async function tryLogin(request: LoginRequest){
    try{
      await loginAsync(request);
    }
    catch (e) {

    }
  }

  async function verifyLogin(request: LoginVerifyRequest){
    try{
      const response = await verifyLoginAsync(request);
      console.log(response);
    }
    catch (e) {

    }
  }

  return {
    tryLogin,
    verifyLogin
  }
})
