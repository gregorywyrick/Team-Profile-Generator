const Engineer = require('../lib/Engineer');

test('make engineer', () => {
    const engineer = new Engineer('Gregory', 69, 'gregmwyrick@gmail.com', 'gregorywyrick');
    expect(engineer.github).toEqual(expect.any(String));
})
test('engineer github', () => {
    const engineer = new Engineer('Gregory', 69, 'gregmwyrick@gmail.com', 'gregorywyrick');
    expect(engineer.getGithub()).toEqual(expect.any(String));
})
test('engineer role', () => {
    const engineer = new Engineer('Gregory', 69, 'gregmwyrick@gmail.com', 'gregorywyrick');
    expect(engineer.getRole()).toEqual("Engineer");
})