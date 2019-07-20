#!/bin/bash

cd 'src'
node --experimental-modules --trace-warnings 'test.mjs'
cd '..'
