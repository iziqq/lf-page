import {safeParse} from "valibot";
import {type SeatRegisterResponse, seatRegisterResponseSchema} from "@/common/seat/dto/seat-register.response.ts";
import type {SeatRegisterRequest} from "@/common/seat/dto/seat-register.request.ts";
import {post} from "@/common/api.ts";

export async function registerSeatService(request: SeatRegisterRequest): Promise<SeatRegisterResponse> {
  const response = await post<SeatRegisterResponse>("/seats/register", request);

  const validationResult = safeParse(seatRegisterResponseSchema, response);
  if (! validationResult.success) {
      throw new Error("Invalid seat registration response");
  }
  return response;
}
