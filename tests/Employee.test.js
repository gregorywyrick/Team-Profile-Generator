const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Gregory', 69, 'gregmwyrick@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('employee name', () => {
    const employee = new Employee('Gregory', 69, 'gregmwyrick@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
})
test('employee id', () => {
    const employee = new Employee('Gregory', 69, 'gregmwyrick@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
})
test('employee email', () => {
    const employee = new Employee('Gregory', 69, 'gregmwyrick@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
})
test('employee role', () => {
    const employee = new Employee('Gregory', 69, 'gregmwyrick@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})