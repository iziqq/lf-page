import { defineStore } from 'pinia'
import type {LoginRequest} from "@/auth/backend/dto/login.request.ts";
import type {LoginVerifyRequest} from "@/auth/backend/dto/login-verify.request.ts";
import {loginAsync, verifyLoginAsync} from "@/auth/backend/auth.service.ts";
import {ref} from "vue";

export const authStore = defineStore('auth', () => {

  const is2faRequired = ref(false);
  const loginEmail = ref("");

  async function tryLogin(request: LoginRequest){
    try{
      await loginAsync(request);
      loginEmail.value = request.email;
      is2faRequired.value = true;
    }
    catch (e) {
      console.log(e);
    }
  }

  async function verifyLogin(code: string){
    try{
      const request: LoginVerifyRequest = {
        email: loginEmail.value,
        code: code
      };
      const response = await verifyLoginAsync(request);
      console.log(response);
    }
    catch (e) {
      console.log(e);
    }
  }

  return {
    is2faRequired,
    tryLogin,
    verifyLogin
  }
})
