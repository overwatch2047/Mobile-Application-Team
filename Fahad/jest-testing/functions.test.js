 const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy();
});

test('Should be Fahad Asif', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Fahad',
        lastName: 'Asif',
    });
});

test('Should be less than 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// test('Name is Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchData();
//     expect(data.name).toEqual('Leanne Graham');
// });

test('Name is Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchData()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});