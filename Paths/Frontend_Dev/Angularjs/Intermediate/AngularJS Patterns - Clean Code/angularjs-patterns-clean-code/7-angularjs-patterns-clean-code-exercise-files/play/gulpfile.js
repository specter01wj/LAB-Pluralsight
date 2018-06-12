var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function () {
    return gulp
        .src('./sample.js')
        .pipe(ngAnnotate({add: true, single_quotes: true}))
        .pipe(gulp.dest('./build'));
});
