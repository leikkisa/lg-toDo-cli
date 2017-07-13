#!/usr/bin/env node

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readToDoList = readToDoList;
exports.writeToDoList = writeToDoList;
var fs = require('fs');
var toDoFile = './tasks.json';

function readToDoList(cb) {
  fs.readFile(toDoFile, function (err, data) {
    if (err) {
      if (err.code === 'ENOENT') {
        var _result = [];
        return cb(null, _result);
      } else {
        return cb(err);
      }
    }
    var result = JSON.parse(data);
    cb(null, result);
  });
}

function writeToDoList(data, cb) {
  fs.writeFile(toDoFile, JSON.stringify(data), function (err) {
    if (err) throw err;
    cb && cb();
  });
}