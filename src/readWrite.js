#!/usr/bin/env node
'use strict'
const fs = require('fs')
const toDoFile = './tasks.json'

export function readToDoList (cb) {
  fs.readFile(toDoFile, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        const result = []
        return cb(null, result)
      } else {
      return cb(err)
      }
    }
    const result = JSON.parse(data)
    cb(null, result)
  })
}

export function writeToDoList (data, cb) {
  fs.writeFile(toDoFile, JSON.stringify(data), (err) => {
    if (err) throw err
    cb && cb()
  })
}
