import request from 'supertest';
import app from '../app';

// get all boats
describe('boats endpoint', () => {
    test('should return collection of boats', async () => {
        const resp = await request(app).get('/boats');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
    });

// get boat by id
    test('fail when boat not found', async () => {
        const resp = await request(app).get('/boats/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// post boat 
    test('should add boat successfully', async () => {
        const resp = await request(app).post('/boats').send({
            id: 999,
            name: 'test',
            width: 11,
            length: 22,
            motorized: {"":""},
            port: {"":""},
            country: 'France',
            type: 'yacht',
            skipper: 'no',
            pictures: {"":""},
            equipments: {"":""},
            specifications: {"":""},
            availability: {"":""},
            deposit: 5000,
            note: 4.8,
            propertyPapers: {"":""},
            idOwner: 1
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
    });

// update boat by id not found
test('fail when boat not found', async () => {
    const resp = await request(app).patch('/boats/999');
    expect(resp.statusCode).toEqual(404);
    expect(resp.body).not.toBeNull();
    expect(resp.body).not.toHaveProperty('data');
    expect(resp.body).not.toHaveProperty('success');
    expect(resp.body.success).toBeFalsy();
});

// delete boat by id not found
    test('fail when boat not found', async () => {
        const resp = await request(app).delete('/boats/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });
});

// ---------------------------------------------------------------------------------------------------------------

// get user by id
describe('user endpoint', () => {
    test('fail when user not found', async () => {
        const resp = await request(app).get('/users/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// get user reservation history by id
    test('fail when user not found', async () => {
        const resp = await request(app).get('/users/history/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// post user 
    test('should post user successfully', async () => {
        const resp = await request(app).post('/users').send({
            name: 'test',
            firstName: 'test2',
            birthDate: '16-11-2000',
            emailAddress: 'certifiedbanger777@gmail.com',
            phoneNumber: '0777777777',
            password: 'regnabdeiefitrec777',
            salt: 'nf1ohh8g8760fogf35',
            note: '4.4',
            creationDate: '10-11-2023',
            profilePicture: '/pathtoimages',
            spokenLanguages: {"":""},
            status: 'personnal',
            isOwner: false,
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
    });

// update user by id
    test('fail when user not found', async () => {
        const resp = await request(app).patch('/users/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// delete user by id
    test('fail when user not found', async () => {
        const resp = await request(app).delete('/users/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });
});

// ---------------------------------------------------------------------------------------------------------------

// get reservation by id
describe('reservation endpoint', () => {
    test('fail when reservation not found', async () => {
        const resp = await request(app).get('/reservations/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// post reservation 
    test('should post reservations successfully', async () => {
        const resp = await request(app).post('/reservations').send({
            startingDate: '10-11-2023',
            endDate: '15-11-2023',
            ppn: 179,
            note: null,
            idClient: 1,
            idBoat: 1,
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
    });

// update reservation by id
    test('fail when reservations not found', async () => {
        const resp = await request(app).patch('/reservations/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// delete reservation by id
    test('fail when reservations not found', async () => {
        const resp = await request(app).delete('/reservations/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });
});

// ---------------------------------------------------------------------------------------------------------------

// get reservationHistory by id
describe('reservationHistory endpoint', () => {
    test('fail when reservatioHistory not found', async () => {
        const resp = await request(app).get('/reservationsHistory/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// post reservationHistory
    test('should post reservationHistory successfully', async () => {
        const resp = await request(app).post('/reservationsHistory').send({
            idUser: 1,
            idReservation: 1,
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
    });

// update reservationHistory by id
    test('fail when reservationHistory not found', async () => {
        const resp = await request(app).patch('/reservationsHistory/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// delete reservationHistory by id
    test('fail when reservationHistory not found', async () => {
        const resp = await request(app).delete('/reservationsHistory/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });
});

// ---------------------------------------------------------------------------------------------------------------

// get comments by id
describe('comments endpoint', () => {
    test('fail when comments not found', async () => {
        const resp = await request(app).get('/comments/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// post comments 
    test('should post comments successfully', async () => {
        const resp = await request(app).post('/comments').send({
            content: 'énorme séjour de merde, bâteau introuvable et les propriétaires nous ont jeté des cailloux pendant qu\'ils rigolaient en se cachant derrière des arbres',
            idReservation: 3,
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
    });

// update comments by id
    test('fail when comments not found', async () => {
        const resp = await request(app).patch('/comments/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });

// delete comments by id
    test('fail when comments not found', async () => {
        const resp = await request(app).delete('/comments/999');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body.success).toBeFalsy();
    });
});