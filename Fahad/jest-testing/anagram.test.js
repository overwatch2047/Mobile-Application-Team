const isAnagram = require('./anagram');

test('isAnagram functions exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"Elbow" is an anagram of "Below"', () => {
    expect(isAnagram('Elbow', 'Below')).toBeTruthy();
});