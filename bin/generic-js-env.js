'use strict';
/* global require */
/* global process */

var fs = require ('fs');
var path = require ('path');

var cwd = process.cwd ().replace (/\\/g, '/');
var suffix = '/node_modules/generic-js-env';

if (cwd.endsWith (suffix)) {
  var root = cwd.substr (0, cwd.length - suffix.length);
  var files = fs.readdirSync (path.join (cwd, 'templates'));

  var regex = /\r\n/g;
  var newline = '\n';
  if (process.platform === 'win32') {
    regex = /([^\r])\n/g;
    newline = '$1\r\n';
  }

  files.forEach (function (file) {
    var data = fs.readFileSync (path.join (cwd, 'templates', file));
    fs.writeFileSync (path.join (root, file), data.toString ().replace (regex, newline));
  });
}
