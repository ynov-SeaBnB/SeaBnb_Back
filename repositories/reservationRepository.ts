import Reservation from '../models/reservation';

export async function createReservation(reservationData: any): Promise<any> {
    try {
        const reservation = await Reservation.create({
            startingDate: reservationData.startingDate,
            endDate: reservationData.endDate,
            ppn: reservationData.ppn,
            note: reservationData.note,
            idClient: reservationData.idClient,
            idBoat: reservationData.idBoat
        });
        return reservation;
    } catch (error) {
        console.error(error);
        throw error;
    }
}