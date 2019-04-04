const gulp            = require('gulp');
const nunjucksRender  = require('gulp-nunjucks-render');
const autoprefixer    = require('gulp-autoprefixer');
const concat          = require('gulp-concat');
const cssnano         = require('gulp-cssnano');
const browserSync     = require('browser-sync');
const data            = require('gulp-data');
const minify          = require('gulp-minify');
const pump            = require('pump');
const rename          = require('gulp-rename');
const imagemin        = require('gulp-imagemin');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

gulp.task('concatCSS', function(cb) {
    // 1. объединение стилей библиотек в style.css, 
    // 2. проставление префиксов
    // 3. сжатие style.css
    // 4. переименование в style.min.css
    pump([
        gulp.src('src/styles/common.blocks/**/*.css'),
        concat('style.css'),
        autoprefixer(),
        cssnano(),
        rename({suffix: '.min'}),
        gulp.dest('dist'),
        browserSync.reload({stream: true})
      ],
      cb
    );
    // отдельный файл стилей для бета-версий
    pump([
        gulp.src('src/styles/beta.blocks/**/*.css'),
        concat('beta.css'),
        autoprefixer(),
        cssnano(),
        rename({suffix: '.min'}),
        gulp.dest('dist'),
        browserSync.reload({stream: true})
      ],
      cb
    );
});

gulp.task('scripts', function (cb) {
    // сжатие JS
    pump([
          gulp.src([
              'src/scripts/*.+(js|mjs)',
              // исключения: не обрабатывать инлайновые скрипты (для них есть таск "inline-scripts")
              '!src/scripts/resize-observer.js',
              '!src/scripts/split_init.mjs',
              '!src/scripts/peppermint_init.js',
              '!src/scripts/autocomplete.js'
            ]),
          gulp.dest('dist/scripts')
      ],
      cb
    );
  });

  gulp.task('compress-libs', function (cb) {
    // 1. сжатие всех скриптов библиотек
    // 2. добавление суффикса .min
    pump([
        gulp.src('src/libs/**/*.+(js|mjs)'),
        minify(),
        gulp.dest('dist/libs'),
        browserSync.reload({stream: true})
      ],
      cb
    );
    // 1. сжатие всех стилей библиотек
    // 2. добавление суффикса .min
    pump([
        gulp.src('src/libs/**/*.css'),
        cssnano(),
        rename({suffix: '-min'}),
        gulp.dest('dist/libs'),
        browserSync.reload({stream: true})
      ],
      cb
    );
    // сжатие JPG/PNG библиотек
    pump([
        gulp.src('src/libs/**/*.+(jpg|png)'),
        imagemin(),
        gulp.dest('dist/libs'),
        browserSync.reload({stream: true})
      ],
      cb
    );

  });

  gulp.task('inline-scripts', function (cb) {
        // обработка без сжатия
        pump([
            gulp.src([
                'src/scripts/split_init.mjs',
                'src/scripts/autocomplete.js'
            ]),
            gulp.dest('src/templates/parts/scripts/')
        ],
        cb
    );
        // обработка со сжатием
        pump([
            gulp.src([
                'src/scripts/resize-observer.js',
                'src/scripts/peppermint_init.js'
                ]),
            minify(),
            gulp.dest('src/templates/parts/scripts/')
        ],
        cb
    );
  });

gulp.task('nunjucks', function() {
  return gulp.src('src/content/**/*.njk')
    .pipe(data(function() {
        return require('./src/data.json')
    }))
    .pipe(nunjucksRender({
        path: ['src/templates']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true})); // дублируется в каждом таске (исправить!)
});

gulp.task('img', function() {
    return gulp.src([
        'src/img/**/*.+(jpg|png|svg|gif)'
    ])
      .pipe(gulp.dest('dist/img'))
      .pipe(browserSync.reload({stream: true})); // дублируется в каждом таске (исправить!)
});

gulp.task('watch', function(cb) {
    gulp.series(
        'concatCSS',
        'scripts',
        'compress-libs',
        'inline-scripts',
        'nunjucks',
        'img',
        'browser-sync'
    )(cb);
    gulp.watch('src/styles/common.blocks/**/*.css', gulp.series('concatCSS'));
    gulp.watch(['src/libs/**/*.+(js|css)'], gulp.series('compress-libs'));
    gulp.watch([
        'src/scripts/*.+(js|mjs)',
        '!src/scripts/resize-observer.js',
    ], gulp.series('scripts'));

    gulp.watch([
        'src/scripts/resize-observer.js',
        'src/scripts/split_init.mjs',
        'src/scripts/peppermint_init.js',
        'src/scripts/autocomplete.js'
    ], gulp.series('inline-scripts', 'nunjucks'));

    gulp.watch(['src/**/*.+(njk|html|css|js|json)'], gulp.series('nunjucks'));
    gulp.watch(['src/img/**/*.+(jpg|png|svg|gif)'], gulp.series('img'));
});

// разработка
gulp.task('default', gulp.series('watch'));

// сборка в продакшен
gulp.task('deploy',  gulp.series(
    'concatCSS',
    'scripts',
    'compress-libs',
    'inline-scripts',
    'nunjucks',
    'img'
));