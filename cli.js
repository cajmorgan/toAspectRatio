#!/usr/bin/env node
const { argv } = require('process');
const toAspectRatio = require('./toAspectRatio');

toAspectRatio(argv[2], argv[3], argv[4], argv[5], argv[6])