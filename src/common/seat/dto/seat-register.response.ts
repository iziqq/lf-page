import * as v from "valibot";

export type SeatRegisterResponse = {
    seatId: string
}

export const seatRegisterResponseSchema = v.object({
    seatId: v.string()
})