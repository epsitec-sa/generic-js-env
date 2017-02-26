# generic-js-env

The `generic-js-env` npm package can be used to populate the root
directory of a JavaScript project with the various setting files
for the linter/hinter and editor.

```
npm install --save-dev generic-js-env
```

Will create following files in the root of the project:

* `.editorconfig`
* `.eslintrc`
* `.gitattributes`
* `.jscrc`
* `.jshintrc`

If you need also `.babelrc` and its settings, also specify the
`babel-env` package, which includes Babel:

```
npm install --save-dev babel-env
```

# Includes packages

Most of our JavaScript projects need `rimraf` and `require-self`.
They will be installed together with `generic-js-env`.

# Notes

With the `linter-jscs` 1.7.3 in atom 4.0.1, files which have multiple
very long lines make the editor drop to a crawl.
See [issue](https://github.com/AtomLinter/linter-jscs/issues/241).

For now, the only solution I've come up is to extend the limit for
`maximumLineLength` to a large number, such as `200`.
