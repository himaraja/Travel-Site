var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
    return gulp.src(['./app/assets/styles/**/*.css','./app/assets/scripts/**/*.css'])
    .pipe(modernizr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));

});