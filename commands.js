#!/usr/bin/env node
'use strict'
const fs = require('fs')
const rw = require('./readWrite')

exports.add = function(task, cb){
  rw.readToDoList((err, toDoList) => {
    if (err) throw new Error (err)
    const newTask = {
      id: toDoList.length + 1,
      task: task,
      status: 'to do',
    }
    toDoList.push(newTask)
    rw.writeToDoList(toDoList)
    const output = "Created task '" + newTask.task + "'."
    cb(output)
  })
}

exports.list = function(cb) {
  rw.readToDoList((err, toDoList) => {
    if (err) throw new Error (err)
    let printout = [
      ' ID   Description ',
      '---- -------------',
    ]
    let countToDos = 0
    toDoList.forEach((item) => {
      if (item.status === 'to do') {
        countToDos++
        printout.push( ' ' +
        Array(3 - item.id.toString().length).join(' ')
        + item.id + '   ' + item.task)
      }
    })
    const output = 'hello'
    // const output = printout.join('\n') +
    // '  \n\n' + countToDos + ' task(s).'
    cb && cb(output)
  })
}

exports.done = function (id, cb) {
  rw.readToDoList((err, toDoList) => {
    if (err) throw new Error (err)
    const index = toDoList.findIndex((item => item.id == id));
    toDoList[index].status = 'did it'
    rw.writeToDoList(toDoList)
    const output = 'Completed the task ' + toDoList[index].task
    cb(output)
  })
}
