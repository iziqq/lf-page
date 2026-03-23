import {createSeatRegisterRequest} from "@/common/seat/dto/seat-register.request.ts";
import {registerSeatService} from "@/common/seat/seat.service.ts";

const SEAT_ID_KEY = "IziSeatId";

export async function registerSeat(): Promise<string | null> {
    try{
        const savedSeatId = getSavedSeatId();

        const request = createSeatRegisterRequest(savedSeatId);
        const response = await registerSeatService(request);

        if (! savedSeatId)
            saveSeatId(response.seatId);

        return response.seatId;
    }
    catch (e) {
        return null;
    }

}

export function getSavedSeatId(): string | null {
    return localStorage.getItem(SEAT_ID_KEY);
}

function saveSeatId(seatId: string) {
    localStorage.setItem(SEAT_ID_KEY, seatId);
}
