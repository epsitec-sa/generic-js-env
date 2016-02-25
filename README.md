# generic-js-env

The `generic-js-env` npm package can be used to populate the root
directory of a JavaScript project with the various setting files
for the linter/hinter and editor.

```
npm install --save-dev generic-js-env
```

Will create following files in the root of the project:

* `.editorconfig`
* `.gitattributes`
* `.jscrc`
* `.jshintrc`

If you need also `.babelrc` and its settings, also specify the
`babel-env` package, which includes Babel:

```
npm install --save-dev babel-env
```
