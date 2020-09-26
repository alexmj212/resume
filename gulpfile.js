const { src, dest, watch } = require("gulp");

const sass = require('gulp-sass');
const sync = require("browser-sync").create();


function generateCSS(cb) {
    src('./sass/**/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
        .pipe(sync.stream());
    cb();
}

function syncBrowser(cb) {
    sync.init({
        open: false,
        server: {
            baseDir: "./"
        }
    });

    watch('sass/**.scss', generateCSS);
    watch("**/*.html").on('change', sync.reload);
    watch("js/**.js").on('change', sync.reload);
}

exports.build = generateCSS;
exports.watch = syncBrowser;

exports.default = syncBrowser;
