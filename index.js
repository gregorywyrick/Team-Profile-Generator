const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`)
const inquirer = require(`inquirer`);
const path = require(`path`);
const fs = require(`path`);
const OUTPUT_DIR = path.resolve(__dirname, `dist`);
const generatePath = path.join(OUTPUT_DIR, `team.html`);
const makeTeam = require('./src/page-template')

const teamArray = [];