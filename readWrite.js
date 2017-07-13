#!/usr/bin/env node
'use strict'
import fs from 'fs'
import toDoFile from './tasks.json'

function readToDoList (cb) {
  fs.readFile(toDoFile, (err, data) => {
    if (err) {
      if (err === 'ENOENT') {
        const result = []
        cb(null, result)
      } else {
      return cb(err)
      }
    }
    const result = JSON.parse(data)
    cb(null, result)
  })
}

function writeToDoList (data, cb) {
  fs.writeFile(toDoFile, JSON.stringify(data), (err) => {
    if (err) throw err
    cb && cb()
  })
}

module.exports = { readToDoList, writeToDoList }
