var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var globalShim = require('browserify-global-shim');
var watch = require('gulp-watch');

// Settings
var configVendors = require('./config/vendors.json');
var configPaths = require('./config/paths.json');

// Paths
var publicDir = configPaths.public; 
var assets = configPaths.assets;
var src = configPaths.src;

// Vendors
var vendorScripts = configVendors.scripts;
var vendorStyles = configVendors.styles;

gulp.task('static', function () {
  var staticsPath = src + '/static/**/*';
  gulp.src(staticsPath)
    .pipe(gulp.dest(publicDir));
});

gulp.task('jsx', function(){
  var b = browserify({
    ignoreGlobals: true,
    extensions: ['.jsx']
  });
  var globalShimTransform = globalShim.configure({
    'react': 'React',
    'lodash': '_',
    'page': 'page'
  });
  b.transform(reactify);
  b.transform(globalShimTransform);
  b.add(src + '/jsx/router.jsx');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(assets));
});

gulp.task('stylus', function () {
  return gulp.src([
      src + '/stylus/app.styl'
    ])
    .pipe(stylus())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(assets));
});

gulp.task('vendors/js', function () {
  return gulp.src(vendorScripts)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(assets));
});

gulp.task('vendors/css', function () {
  return gulp.src(vendorStyles)
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest(assets));
});

gulp.task('watch/jsx', function () {
  gulp.watch(src + '/jsx/**/*.jsx', ['jsx']);
});

gulp.task('watch/styl', function () {
  gulp.watch(src + '/stylus/**/*.styl', ['stylus']);
});

gulp.task('watch/static', function () {
  gulp.watch(src + '/static/**/*', ['static']);
});

gulp.task('watch', ['watch/jsx', 'watch/styl', 'watch/static']);
gulp.task('vendors', ['vendors/js', 'vendors/css']);
gulp.task('fast-build', ['static', 'jsx', 'stylus']);
gulp.task('build', ['vendors', 'fast-build']);
gulp.task('default', ['build', 'watch']);
