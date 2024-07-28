#!/usr/bin/env node
import { exec } from 'child_process';

const repositoryUrl = 'https://github.com/Shadi-Almohtaseb/PPU-Node-Express-Tutorial.git';
const name = process.argv[2] || '.'; // Use current directory if name is not provided
console.log('Now we will try to clone the repository and install its dependencies');

const cloneCommand = name === '.' ? `git clone ${repositoryUrl} .` : `git clone ${repositoryUrl} ${name}`;
exec(cloneCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`Info: ${stderr}`);
    }
    console.log(`Cloned repository into ${name === '.' ? 'current directory' : name}`);
    const installCommand = name === '.' ? `npm i` : `cd ${name} && npm i`;
    console.log(`Info: Installing dependencies...`);
    exec(installCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`Info: ${stderr}`);
        }
        console.log(`Installed dependencies in ${name === '.' ? 'current directory' : name}`);
    });
});