const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const minify = require("gulp-babel-minify");

function js() {
  return src('src/**/*.js')
  .pipe(babel({
      presets: ['@babel/env']
  }))
  .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  .pipe(dest('chords-acula-extension'))
}

exports.js = js;
exports.build = js;
exports.default = exports.build;