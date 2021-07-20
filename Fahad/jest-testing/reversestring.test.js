const reverseString = require('./reversestring');

test('reverseString functions exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverse', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});