#!/usr/bin/env node
'use strict'
import { expect }  from 'chai'
import { add, list, complete } from './commands'
import { readToDoList, writeToDoList } from './readWrite'

describe('Command Line To Do CLI', function() {
  let realToDos = []
  const testToDos = [
    {"id":1,"task":"Buy milk","status":"to do"},
    {"id":2,"task":"say hello to the world","status":"to do"},
    {"id":3,"task":"shoot for the moon","status":"to do"},
    {"id":4,"task":"hula hoop","status":"did it"},
    {"id":5,"task":"run around in circles","status":"to do"},
    {"id":6,"task":"eat some mac n cheese","status":"to do"},
    {"id":7,"task":"make an impressive to do list","status":"to do"},
    {"id":8,"task":"do moar yoga","status":"did it"},
    {"id":9,"task":"sleep in","status":"to do"},
    {"id":10,"task":"listen to the birds sing","status":"did it"}
  ]

  before((done) => {
    const saveCurrentToDoList = function (cbWriteTestToDos) {
      readToDoList((err, currentToDoList) => {
        if (err) throw new Error (err)
        realToDos = currentToDoList
        cbWriteTestToDos(testToDos, () => {
          done()
        })
      })
    }(writeToDoList)
  })

  after((done) => {
    writeToDoList(realToDos, () => {
      done()
    })
  })


  describe('add to do', () => {
    it('add is a function', () => {
      expect(add).to.be.a('function')
    })
    it('add function adds a task to the list', (done) => {
      add('climb a mountain', (output) => {
        expect(output).to.match(/mountain/)
        done()
      })
    })
  })

  describe('list to dos', () => {

    it('list function is a function', () => {
      expect(list).to.be.a('function')
    })

    it('list function lists tasks that still need to be done', function(done) {
      list(function(output) {
        expect(output).to.match(/moon/)
        done()
      })
    })
  })

  describe('complete to do', () => {
    it('done function is a function', () => {
      expect(complete).to.be.a('function')
    })
    it('done updates a task status to "did it"', (done) => {
      complete(1, (output) => {
        expect(output).to.match(/milk/)
        done()
      })
    })
  })

})
