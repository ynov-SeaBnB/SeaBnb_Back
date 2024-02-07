import ReservationHistory from '../models/reservationHistory';

export async function createReservationHistory(reservationHistoryData: any): Promise<any> {
    try {
        const reservationHistory = await ReservationHistory.create({
            idUser: reservationHistoryData.idReservation,
            idReservation: reservationHistoryData.idReservation
        });
        return reservationHistory;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
