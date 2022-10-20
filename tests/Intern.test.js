const Intern = require('../lib/Intern');

test('make Intern', () => {
    const intern = new Intern('Gregory', 69, 'gregmwyrick@gmail.com', 'A&M');
    expect(intern.school).toEqual(expect.any(String));
})
test('intern school', () => {
    const intern = new Intern('Gregory', 69, 'gregmwyrick@gmail.com', 'A&M');
    expect(intern.getSchool()).toEqual(expect.any(String));
})
test('intern role', () => {
    const intern = new Intern('Gregory', 69, 'gregmwyrick@gmail.com', 'A&M');
    expect(intern.getRole()).toEqual("Intern");
})