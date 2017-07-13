#!/usr/bin/env node
'use strict'
import { add, list, done } from './commands'

const command = process.argv[2]
const commandInput = process.argv[3]

switch (command) {
  case 'add':
    add(commandInput, console.log)
    break
  case 'list':
    list(console.log)
    break
  case 'done':
    done(commandInput, console.log)
    break
  default:
    console.log(
    'Please enter a valid command:\n' +
    'add ["my task"]\n' +
    'list\n'+
    'done [task id]'
    )
}
