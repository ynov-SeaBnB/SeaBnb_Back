import Boat from '../models/boat';

export async function createBoat(boatData: any): Promise<any> {
    try {
        const boat = await Boat.create({
            name: boatData.name,
            width: boatData.volume,
            length: boatData.length,
            motorized: boatData.motorized,
            port: boatData.port,
            country: boatData.country,
            type: boatData.type,
            skipper: boatData.skipper,
            pictures: boatData.pictures,
            equipments: boatData.equipments,
            specifications: boatData.specifications,
            availability: boatData.availability,
            deposit: boatData.deposit,
            note: boatData.note,
            propertyPapers: boatData.propertyPapers,
            idOwner: boatData.idOwner
        });
        return boat;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
