#!/usr/bin/env node
'use strict'

// ~ node fizzbuzz [num]
for(let i=0; i<=process.argv[2]; i++) {
  console.log( ((i%3 ? "" : "fizz") + (i%5 ? "" : "buzz")) || i )
}