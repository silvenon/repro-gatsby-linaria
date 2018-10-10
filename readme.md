# Linaria Babel Repro

This repro demonstrates an issue with Linaria's evaluation currently not being able to accept custom Babel configuration. If there's a Babel configuration file in the standard place, Linaria will automatically pick it up, but with tools like Gatsby which handle Babel configuration internally it's not possible to tell Linaria to use a custom one.

```sh
yarn
yarn start
# works
rm babel.config.js
yarn start
# fails
```

It fails because Linaria's evaluate no longer parses `styles.js` with Flow, even though babel-loader does.
