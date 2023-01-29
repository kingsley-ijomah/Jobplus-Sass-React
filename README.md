# React + Sass

This is a react project with SASS baked into it, use it as your basis for whenever you want to create your own React + SASS combo.

### Explore the `package.json` file

Have a look at all the dependencies we have used in our package.json file.

### Mixin challenge

Mixins need to be imported into the React component where they are used. If the mixin is not imported, React will not be able to pick it up.

You will notice we have manually imported all the loaders that make this possible: css-loader, sass-loader, sass-resources-loader, style-loader.

e.g we have defined breakpoints, without above sass-resources-loader, we would have to manually remember to import the breakpoint everwhere we need to call it.

### Webpack config

We install `webpack` so we can use it to specify our loaders and the order they run.

We then use webpack config to load in all the loaders in the correct sequence, which is in a reverse order.

Sass Resource Loader will firstly get all our breakpoints, and include them into each sass file, then the sass-loader will take all that sass and spit out a css file, finally the style-loader will load that style into our html page.

```
# webpack.config.js file
...
{ loader: 'style-loader' },
{ loader: 'css-loader' },
{ loader: 'sass-loader' },
{
  loader: 'sass-resources-loader',
  options: {
    resources: [
      './src/assets/sass/mixins/_breakpoints.scss'
    ]
  }
}
```

### Run Script

We then tell our package.json run script to use the webpack config we created when started our local server or when we run a new build.

```
{
  ...
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
  },
  ...
}
```
