//reverseString(string) takes a string and returns it reversed.


const reverseString = require('./reverse')

it('happy path(example 1)', () => {
    expect(reverseString('hello')).toBe('olleh')
})

it('happy path (example 2)', () => {
    expect(reverseString('good morning')).toBe('gninrom doog')
})

