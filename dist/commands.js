#!/usr/bin/env node

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.list = list;
exports.complete = complete;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _readWrite = require('./readWrite');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function add(task, cb) {
  (0, _readWrite.readToDoList)(function (err, toDoList) {
    if (err) throw new Error(err);
    var newTask = {
      id: toDoList.length + 1,
      task: task,
      status: 'to do'
    };
    toDoList.push(newTask);
    (0, _readWrite.writeToDoList)(toDoList);
    var output = "Created task " + newTask.id + ", '" + newTask.task + "'.";
    cb(output);
  });
}

function list(cb) {
  (0, _readWrite.readToDoList)(function (err, toDoList) {
    if (err) throw new Error(err);
    var printout = [' ID   Description ', '---- -------------'];
    var countToDos = 0;
    toDoList.forEach(function (item) {
      if (item.status === 'to do') {
        countToDos++;
        printout.push(' ' + Array(3 - item.id.toString().length).join(' ') + item.id + '   ' + item.task);
      }
    });
    var output = printout.join('\n') + '  \n\n' + countToDos + ' task(s).';
    cb && cb(output);
  });
}

function complete(id, cb) {
  (0, _readWrite.readToDoList)(function (err, toDoList) {
    if (err) throw new Error(err);
    var index = toDoList.findIndex(function (item) {
      return item.id == id;
    });
    var output = void 0;
    if (index === -1) {
      output = 'Task not found, please enter the ID of a task that still needs to be done.';
    } else {
      toDoList[index].status = 'did it';
      (0, _readWrite.writeToDoList)(toDoList);
      output = "Completed the task '" + toDoList[index].task + "'";
    }
    cb(output);
  });
}