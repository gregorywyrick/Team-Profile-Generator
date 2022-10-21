const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`)
const inquirer = require(`inquirer`);
const path = require(`path`);
const fs = require(`fs`);
const OUTPUT_DIR = path.resolve(__dirname, `dist`);
const generatePath = path.join(OUTPUT_DIR, `team.html`);
const generateTeam = require('./src/page-template');

const teamArray = [];

function runApp () {
    function theTeam () {
        inquirer.prompt([{
            type: `list`,
            message: `What role would you like to add to the team?`,
            name: `role`,
            choices: ['Manager', `Engineer`, `Intern`, `I don't need to add a new role.`]
        }]).then(function(userInput) {
            switch(userInput.role) {
                case `Manager`:
                    addManager();
                    break;
                case `Engineer`:
                    addEngineer();
                    break;
                case `Intern`:
                    addIntern();
                    break;
                default:
                    buildHTML();
            }
        })
    }

function addManager() {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the new managers name?`
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the managers id number?`
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the new managers email address?`
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `What is the new managers office number?`
        }
    ]).then(managerInput => {
        const manager = new Manager(
            managerInput.name,
            managerInput.id,
            managerInput.email,
            managerInput.officeNumber
        );
        teamArray.push(manager);
        theTeam();
    });
}
function addEngineer() {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the new engineers name?`
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the new engineers id number?`
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the new engineers email address?`
        },
        {
            type: `input`,
            name: `github`,
            message: `What is the new engineers Github username?`
        }
    ]).then(engineerInput => {
        const engineer = new Engineer(
            engineerInput.name,
            engineerInput.id,
            engineerInput.email,
            engineerInput.github
        );
        teamArray.push(engineer);
        theTeam();
    });
}
function addIntern() {
    inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the new interns name?`
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the new interns id number?`
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the new interns email address?`
        },
        {
            type: `input`,
            name: `school`,
            message: `What school does the new intern go to?`
        }
    ]).then(internInput => {
        const intern = new Intern(
            internInput.name,
            internInput.id,
            internInput.email,
            internInput.school
        );
        teamArray.push(intern);
        theTeam();
    });
}

function buildHTML () {
    console.log(`Your team has been created`);
    fs.writeFileSync(generatePath, generateTeam(teamArray), `UTF-8`)
}
theTeam();
}
runApp();