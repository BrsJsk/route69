const gulp = require('gulp');
const babel = require('gulp-babel');
const uglifyJS = require('gulp-uglify');

gulp.task('build', function() {
    return gulp.src('src/router.js')
        .pipe(babel())
        .pipe(uglifyJS())
        .pipe(gulp.dest('dist'));
});
