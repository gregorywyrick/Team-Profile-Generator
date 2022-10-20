const Manager = require('../lib/Manager');

test('make manager and check office number', () => {
    const manager = new Manager('Gregory', 69, 'gregmwyrick@gmail.com', 420);
    expect(manager.officeNumber).toBe(expect.any(Number));
})
test('manager role', () => {
    const manager = new Manager('Gregory', 69, 'gregmwyrick@gmail.com', 420);
    expect(manager.getRole()).toBe("Manager");
})