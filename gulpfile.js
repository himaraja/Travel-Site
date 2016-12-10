var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task ('default', function() {
	console.log("hey..this is my first gulp task")
});

gulp.task ('html', function() {
	console.log("hey..this is my first gulp HTML task")
});

gulp.task ('styles', function() {
	console.log("hey..this is my first gulp style task")
});

gulp.task ('watch', function() {
	watch('./app/index.html', function(){
		gulp.start('html')
	})
});

gulp.task ('watch', function() {
	watch('./app/assets/styles/*.css', function(){
		gulp.start('styles')
	})
});