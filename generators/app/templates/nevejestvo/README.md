#How to use

Clone this repo and then type in command line:

* `yo nevejestvo` - get me
* `npm i` or `yarn` - install all dependencies
* `gulp` - run dev-server
* `gulp --open` - run dev-server and open in browser
* `gulp build --production` - build project from sources

## Main tasks
Task name          | Description
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build:dev`        | build dev version of project (without code optimizations)
`build`            | build production-ready project (with code optimizations)

### Flags

Several useful flags:

* `gulp --open` or `gulp server --open` - run dev server and then open preview in browser
* `gulp --tunnel=[name]` or `gulp server --tunnel [name]` - runs dev server and allows you to easily share a web service on your local development machine (powered by [localtunnel.me](https://localtunnel.me/)). Local site will be available at `[name].localtunnel.me`.

### Other
You can also use [npm scripts](https://docs.npmjs.com/misc/scripts):

* `npm run start` - same as `gulp default`.
* `npm run build` - same as `gulp build`.
