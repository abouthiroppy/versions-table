#!/usr/bin/env node

'use strict';

const prog = require('caporal');
const packageJson = require('../../package.json');
const { nameList } = require('../../lib/table');

// console.log(nameList)

prog
  .version(packageJson.version)
  .argument('<account>', 'Which account id to use')
  .complete(() => Promise.resolve(nameList))
  .option('-v, --version <es-version>', 'Specify version of ECMA')
  .complete(() => Promise.resolve(nameList))

prog.parse(process.argv);
