#!/usr/bin/env node

'use strict';

var _chai = require('chai');

var _commands = require('./commands');

var _readWrite = require('./readWrite');

describe('Command Line To Do CLI', function () {
  var realToDos = [];
  var testToDos = [{ "id": 1, "task": "Buy milk", "status": "to do" }, { "id": 2, "task": "say hello to the world", "status": "to do" }, { "id": 3, "task": "shoot for the moon", "status": "to do" }, { "id": 4, "task": "hula hoop", "status": "did it" }, { "id": 5, "task": "run around in circles", "status": "to do" }, { "id": 6, "task": "eat some mac n cheese", "status": "to do" }, { "id": 7, "task": "make an impressive to do list", "status": "to do" }, { "id": 8, "task": "do moar yoga", "status": "did it" }, { "id": 9, "task": "sleep in", "status": "to do" }, { "id": 10, "task": "listen to the birds sing", "status": "did it" }];

  before(function (done) {
    var saveCurrentToDoList = function (cbWriteTestToDos) {
      (0, _readWrite.readToDoList)(function (err, currentToDoList) {
        if (err) throw new Error(err);
        realToDos = currentToDoList;
        cbWriteTestToDos(testToDos, function () {
          done();
        });
      });
    }(_readWrite.writeToDoList);
  });

  after(function (done) {
    (0, _readWrite.writeToDoList)(realToDos, function () {
      done();
    });
  });

  describe('add to do', function () {
    it('add is a function', function () {
      (0, _chai.expect)(_commands.add).to.be.a('function');
    });
    it('add function adds a task to the list', function (done) {
      (0, _commands.add)('climb a mountain', function (output) {
        (0, _chai.expect)(output).to.match(/mountain/);
        done();
      });
    });
  });

  describe('list to dos', function () {

    it('list function is a function', function () {
      (0, _chai.expect)(_commands.list).to.be.a('function');
    });

    it('list function lists tasks that still need to be done', function (done) {
      (0, _commands.list)(function (output) {
        (0, _chai.expect)(output).to.match(/moon/);
        done();
      });
    });
  });

  describe('complete to do', function () {
    it('done function is a function', function () {
      (0, _chai.expect)(_commands.complete).to.be.a('function');
    });
    it('done updates a task status to "did it"', function (done) {
      (0, _commands.complete)(1, function (output) {
        (0, _chai.expect)(output).to.match(/milk/);
        done();
      });
    });
  });
});