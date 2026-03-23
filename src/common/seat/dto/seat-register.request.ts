export type SeatRegisterRequest = {
  seatId: string,
}

export function createSeatRegisterRequest(seatId: string | null) : SeatRegisterRequest {
    if (! seatId)
        seatId = crypto.randomUUID()

    return {
        seatId: seatId,
    }
}
