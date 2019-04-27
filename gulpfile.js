const {
  src,
  dest,
  parallel,
  watch,
  series
} = require('gulp');
const babel = require('gulp-babel');
const minify = require("gulp-babel-minify");
const flatten = require('gulp-flatten');
const removeLogging = require("gulp-remove-logging");

const buildPath = 'chords-acula-extension';

function buildJs() {
  return src('src/**/*.js')
    .pipe(removeLogging({
      namespace: ['console', 'window.console']
    }))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(flatten())
    
    .pipe(dest(buildPath))
}

function icons() {
  return src('src/icons/*.png')
    .pipe(dest(buildPath))
}

function devJs() {
  return src('src/**/*.js')
  .pipe(flatten())
  .pipe(dest(buildPath))

}

function dev(cb) {

  watch(['src/**/*.js'], parallel(devJs));
  watch(['src/icons/*.js'], parallel(icons));

  cb();
}

function build(cb) {
  buildJs();
  icons();
  cb();
}

exports.build = build;
exports.dev = dev;
exports.default = exports.build;