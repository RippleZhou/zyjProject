var gulp = require('gulp')
var uglify = require('gulp-uglify')
gulp.task('uglify', function() {
gulp.src('www/build/main.js')
.pipe(uglify())
.pipe(gulp.dest('www/build'))
})
