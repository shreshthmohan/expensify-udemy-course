const add = (a, b) => a + b; 

const genGreet = (name) => `Hello ${name}.`; 

test('should add two numbers', () => {
    const result = add(3,5);
    
    //if (result !== 8) {
    //    throw new Error(`3 and 5 were added. The result was ${result}. Expect 8`);
    //}
    expect(result).toBe(8);
});

test('Should greet hello', () => {
    expect(genGreet('Sam')).toBe('Hello Sam.');
});
