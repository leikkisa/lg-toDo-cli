#!/usr/bin/env node

'use strict';

var _commands = require('./commands');

var command = process.argv[2];
var commandInput = process.argv[3];

switch (command) {
  case 'add':
    (0, _commands.add)(commandInput, console.log);
    break;
  case 'list':
    (0, _commands.list)(console.log);
    break;
  case 'complete':
    (0, _commands.complete)(commandInput, console.log);
    break;
  default:
    console.log('Please enter a valid command:\n' + 'add ["my task"]\n' + 'list\n' + 'complete [task id]');
}