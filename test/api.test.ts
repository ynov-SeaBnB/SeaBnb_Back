// import request from 'supertest';
// import app from '../app';

// get all boats
// describe('boats endpoint', () => {
//     test('should return collection of boats', async () => {
//         const resp = await request(app).get('/boats');
//         expect(resp.statusCode).toEqual(200);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).toHaveProperty('data');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body.success).toBeTruthy();
//         expect(resp.body.data).toHaveLength(3);
//     });

// get boat by id
//     test('fail when boat not found', async () => {
//         const resp = await request(app).get('/boats/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// post boat 
// describe('should post boat endpoint', () => {
//     test('should add boat successfully', async () => {
//         const resp = await request(app).post('/boat').send({
//             name: 'test',
//             width: 11,
//             length: 22,
//             motorized: JSON,
//             port: JSON,
//             country: 'France',
//             type: 'yacht',
//             skipper: 'no',
//             pictures: JSON,
//             equipments: JSON,
//             specifications: JSON,
//             availability: JSON,
//             deposit: 5000,
//             note: 4.8,
//             propertyPapers: JSON,
//             idOwner: 1
//         });
//         expect(resp.statusCode).toEqual(201);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeTruthy();
//     });
// });

// update boat by id
//     test('fail when boat not found', async () => {
//         const resp = await request(app).patch('/boats/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// delete boat by id
//     test('fail when boat not found', async () => {
//         const resp = await request(app).delete('/boats/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

//---------------------------------------------------------------------------------------------------------------

// get user by id
// describe('user endpoint', () => {
//     test('fail when user not found', async () => {
//         const resp = await request(app).get('/users/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// post user 
//     test('should post user successfully', async () => {
//         const resp = await request(app).post('/users').send({
//             name: 'test',
//             firstName: 'test2',
//             age: 22,
//             emailAddress: 'certifiedbanger777@gmail.com',
//             phoneNumber: '0777777777',
//             password: 'regnabdeiefitrec777',
//             salt: 'nf1ohh8g8760fogf35',
//             note: '4.4',
//             creationDate: '10-11-2023',
//             profilePicture: '/pathtoimages',
//             status: 'personnal',
//             isOwner: false,
//         });
//         expect(resp.statusCode).toEqual(201);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeTruthy();
//     });
// });

// update user by id
//     test('fail when user not found', async () => {
//         const resp = await request(app).patch('/users/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// delete user by id
//     test('fail when user not found', async () => {
//         const resp = await request(app).delete('/users/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

//---------------------------------------------------------------------------------------------------------------

// get reservation by id
// describe('reservation endpoint', () => {
//     test('fail when reservation not found', async () => {
//         const resp = await request(app).get('/reservations/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// post reservations 
//     test('should post reservations successfully', async () => {
//         const resp = await request(app).post('/reservations').send({
//             startingDate: '10-11-2023',
//             duration: 4,
//             ppn: 179,
//             note: null,
//             idClient: 1,
//             idBoat: 1,
//         });
//         expect(resp.statusCode).toEqual(201);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeTruthy();
//     });
// });

// update reservations by id
//     test('fail when reservations not found', async () => {
//         const resp = await request(app).patch('/reservations/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// delete reservations by id
//     test('fail when reservations not found', async () => {
//         const resp = await request(app).delete('/reservations/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

//---------------------------------------------------------------------------------------------------------------

// get comments by id
// describe('comments endpoint', () => {
//     test('fail when comments not found', async () => {
//         const resp = await request(app).get('/comments/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// post comments 
//     test('should post comments successfully', async () => {
//         const resp = await request(app).post('/comments').send({
//             content: 'énorme séjour de merde, bâteau introuvable et les propriétaires nous ont jeté des cailloux pendant qu'ils rigolaient en se cachant derrière des arbres',
//             dates: JSON,
//             idClient: 8,
//             idReservation: 3,
//         });
//         expect(resp.statusCode).toEqual(201);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeTruthy();
//     });
// });

// update comments by id
//     test('fail when comments not found', async () => {
//         const resp = await request(app).patch('/comments/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });

// delete comments by id
//     test('fail when comments not found', async () => {
//         const resp = await request(app).delete('/comments/fdp');
//         expect(resp.statusCode).toEqual(404);
//         expect(resp.body).not.toBeNull();
//         expect(resp.body).not.toHaveProperty('data');
//         expect(resp.body).not.toHaveProperty('success');
//         expect(resp.body).toHaveProperty('success');
//         expect(resp.body).toHaveProperty('message');
//         expect(resp.body.success).toBeFalsy();
//     });
// });