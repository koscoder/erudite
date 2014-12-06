var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var globalShim = require('browserify-global-shim');
var watch = require('gulp-watch');

var dest = '../public/assets';
var src = './source';
var vendors = './bower_components';

gulp.task('html', function () {
  gulp.src(src + '/html')
    .pipe(gulp.dest(dest));
});

gulp.task('jsx', function(){
  var b = browserify({
    ignoreGlobals: true,
    extensions: ['.jsx']
  });
  var globalShimTransform = globalShim.configure({
    'react': 'React',
    'lodash': '_'
  });
  b.transform(reactify);
  b.transform(globalShimTransform);
  b.add(src + '/jsx/app.jsx');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(dest));
});

gulp.task('stylus', function () {
  return gulp.src([
      src + '/stylus/app.styl'
    ])
    .pipe(stylus())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(dest));
});

gulp.task('vendors/js', function () {
  return gulp.src([
      vendors + '/lodash/dist/lodash.min.js',
      vendors + '/semantic-ui/dist/semantic.min.js'
    ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(dest));
});

gulp.task('vendors/css', function () {
  return gulp.src([
      vendors + 'semantic-ui/dist/semantic.min.css'
    ])
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest(dest));
});

gulp.task('watch/jsx', function () {
  gulp.watch(src + '/jsx/**/*.jsx', ['jsx']);
});

gulp.task('watch/styl', function () {
  gulp.watch(src + '/stylus/**/*.styl', ['stylus']);
});

gulp.task('watch', ['watch/jsx', 'watch/styl']);
gulp.task('vendors', ['vendors/js', 'vendors/css']);
gulp.task('fast-build', ['html', 'jsx', 'stylus']);
gulp.task('build', ['vendors', 'fast-build']);
gulp.task('default', ['build', 'watch']);
