#!/usr/bin/env node
'use strict'
const rw = require('./readWrite')
const commands = require('./commands')
const command = process.argv[2]
const commandInput = process.argv[3]

switch (command) {
  case 'add':
    commands.add(commandInput, console.log)
    break
  case 'list':
    commands.list(console.log)
    break
  case 'done':
    commands.done(commandInput, console.log)
    break
  default:
    console.log(
    'Please enter a valid command:\n' +
    'add ["my task"]\n' +
    'list\n'+
    'done [task id]'
    )
}
