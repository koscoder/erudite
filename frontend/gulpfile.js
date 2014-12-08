var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var globalShim = require('browserify-global-shim');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

// Settings
var configVendors = require('./config/vendors.json');
var configPaths = require('./config/paths.json');

// Paths
var publicDir = configPaths.public; 
var assets = configPaths.assets;
var src = configPaths.src;
var configDir = configPaths.config;

// Vendors
var vendorScripts = configVendors.scripts;
var vendorStyles = configVendors.styles;
var assetsSources = configVendors.assets;

gulp.task('static', function () {
  var staticsPath = src + '/static/**/*';
  gulp.src(staticsPath)
    .pipe(gulp.dest(publicDir));
});


gulp.task('scripts', function(){
  var b = browserify({
    ignoreGlobals: true,
    extensions: ['.js']
  });
  var globalShimTransform = globalShim.configure({
    'lodash': '_',
    'jQuery': 'jQuery',
    'backbone': 'Backbone',
    'backbone/model': 'Backbone.Model',
    'backbone/collection': 'Backbone.Collection'
  });
  b.transform(globalShimTransform);
  b.add(src + '/js/app.js');
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

gulp.task('vendors/assets', function () {
  for (var assetSrc in assetsSources) {
    var assetName, assetDir;
    var assetDst = assetsSources[assetSrc];
    var separatorIndex = assetDst.indexOf('/');

    if (separatorIndex === -1) {
      assetName = assetDst;
      assetDir = '';
    } else {
      assetName = assetDst.slice(separatorIndex + 1);
      assetDir = assetDst.slice(0, separatorIndex);
    }

    console.log([assetName, assetDir]);
    gulp.src(assetSrc)
      .pipe(rename(assetName))
      .pipe(gulp.dest(assets + '/' + assetDir));
  }
});

gulp.task('watch/scripts', function () {
  gulp.watch(src + '/js/**/*.js', ['scripts']);
});

gulp.task('watch/styl', function () {
  gulp.watch(src + '/stylus/**/*.styl', ['stylus']);
});

gulp.task('watch/static', function () {
  gulp.watch(src + '/static/**/*', ['static']);
});

gulp.task('watch/vendors', function () {
  gulp.watch(configDir + '/vendors.json', ['vendors']);
});

gulp.task('watch', ['watch/scripts', 'watch/styl', 'watch/static', 'watch/vendors']);
gulp.task('vendors', ['vendors/js', 'vendors/css', 'vendors/assets']);
gulp.task('fast-build', ['static', 'scripts', 'stylus']);
gulp.task('build', ['vendors', 'fast-build']);
gulp.task('default', ['build', 'watch']);
