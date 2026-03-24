import {createSeatRegisterRequest} from "@/common/seat/dto/seat-register.request.ts";
import {registerSeatService} from "@/common/seat/seat.service.ts";

const SEAT_ID_KEY = "IziSeatId";

export async function registerSeat(): Promise<void> {
    try{
        const savedSeatId = getSavedSeatId();

      if (! savedSeatId){
        const request = createSeatRegisterRequest(savedSeatId);
        const response = await registerSeatService(request);

        saveSeatId(response.seatId);
      }
    }
    catch (e) {
        console.error(e);
    }

}

export function getSavedSeatId(): string | null {
    return localStorage.getItem(SEAT_ID_KEY);
}

function saveSeatId(seatId: string) {
    localStorage.setItem(SEAT_ID_KEY, seatId);
}
