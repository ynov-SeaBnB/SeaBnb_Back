import User from '../models/user';
import * as bcrypt from 'bcrypt';

export async function createUser(userData: any): Promise<any> {
    try {
        const user = await User.create({
            name: userData.name,
            firstName: userData.firstName,
            birthDate: userData.age,
            emailAddress: userData.emailAddress,
            phoneNumber: userData.phoneNumber,
            password: userData.password,
            note: userData.note,
            creationDate: userData.creationDate,
            status: userData.status,
            isOwner: userData.isOwner
        });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function register(userData: any): Promise<any> {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const user = await User.create({
            name: userData.name,
            firstName: userData.firstName,
            birthDate: userData.birthDate,
            emailAddress: userData.emailAddress,
            password: hashedPassword,
            creationDate: userData.creationDate
        });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}