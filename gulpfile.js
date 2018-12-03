var 	gulp            = require('gulp'),
		browserSync     = require('browser-sync'),
		concat          = require('gulp-concat'),
		uglify          = require('gulp-uglify'),
		rename          = require('gulp-rename'),
		autoprefixer    = require('autoprefixer'),
		postcss 		= require('gulp-postcss'),
		cssnext 		= require('cssnext'),
		precss			= require('precss'),
		pxtorem 		= require('postcss-pxtorem'),
		focus			= require('postcss-focus'),
		cssnext 		= require('cssnext');
//////////////
//Browser-Sync
/////////////
		gulp.task('browser-sync', function() {
		browserSync({
			server: {
				baseDir: './'
			},
			notify: false,
			
		});
	});
//////////////
//CSS
/////////////
gulp.task('css',function (){
	var processors = [
	autoprefixer({browsers: 'last 5 version'}),
	pxtorem({replace: false}),
	focus,
	cssnext,
	precss
	];
	return gulp.src(['src/css/*.css'])
	.pipe(postcss(processors))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({ stream: true }));
});
//////////////
//Scripts
/////////////
gulp.task('common-js', function() {
	return gulp.src([
		'src/js/script.js',
		])
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'src/libs/jquery.min.js',
		'src/js/script.js',
		])
	.pipe(concat('common.min.js'))
	// .pipe(uglify()) // minimize all js (optional)
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({ stream: true }));
});
//////////////
//Watch
//////////////
gulp.task('watch', ['css', 'js', 'browser-sync'], function() {
	gulp.watch('src/css/style.css', ['css']);
	gulp.watch(['src/libs/**/*.js', 'src/js/script.js'], ['js']);
	gulp.watch('index.html', browserSync.reload);
});

gulp.task('default', ['watch']);