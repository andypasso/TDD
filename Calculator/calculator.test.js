//A calculator object that contains the basic operations: add, subtract, divide, and multiply.

const calculator = require('./calculator')


it('sums 3+2', () => {
    expect(calculator.add(3, 2)).toBe(5);
})

it('sums 2+2', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

it('substracts 3-2', ()=>{
    expect(calculator.substract(3, 2)).toBe(1);

})

it('substracts 25-11', ()=>{
    expect(calculator.substract(25, 11)).toBe(14);

})

it('divides 10/2', ()=>{
    expect(calculator.divide(10, 2)).toBe(5);

})

it('divides 120/4', ()=>{
    expect(calculator.divide(120, 4)).toBe(30);

})

it('multiplies 5*4', ()=>{
    expect(calculator.multiply(5, 4)).toBe(20);

})

it('multiplies 2*2', ()=>{
    expect(calculator.multiply(2, 2)).toBe(4);

})