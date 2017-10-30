require.config({
  baseUrl: ".",
  paths: {
    "aurelia-animator-css": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-animator-css/dist/amd/aurelia-animator-css",    
    "aurelia-binding": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-binding/dist/amd/aurelia-binding",
    "aurelia-bootstrapper": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper",
    "aurelia-dependency-injection": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection",
    "aurelia-event-aggregator": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator",
    "aurelia-fetch-client": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-fetch-client/dist/amd/aurelia-fetch-client",
    "aurelia-framework": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-framework/dist/amd/aurelia-framework",
    "aurelia-http-client": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-http-client/dist/amd/aurelia-http-client",
    "aurelia-history": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-history/dist/amd/aurelia-history",
    "aurelia-history-browser": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-history-browser/dist/amd/aurelia-history-browser",
    "aurelia-loader": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-loader/dist/amd/aurelia-loader",
    "aurelia-loader-default": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default",
    "aurelia-logging": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-logging/dist/amd/aurelia-logging",
    "aurelia-logging-console": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console",
    "aurelia-metadata": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-metadata/dist/amd/aurelia-metadata",
    "aurelia-pal": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-pal/dist/amd/aurelia-pal",
    "aurelia-pal-browser": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser",
    "aurelia-path": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-path/dist/amd/aurelia-path",
    "aurelia-polyfills": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills",
    "aurelia-router": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-router/dist/amd/aurelia-router",
    "aurelia-route-recognizer": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-route-recognizer/dist/amd/aurelia-route-recognizer",
    "aurelia-task-queue": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue",
    "aurelia-templating": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-templating/dist/amd/aurelia-templating",
    "aurelia-templating-binding": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-templating-binding/dist/amd/aurelia-templating-binding",

    "fetch": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/text/text",
    
    "text": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/text/text",
    "requirejs-typescript": "https://mattduffield.github.io/aurelia-typescript-deploy/lib/requirejs-typescript.min",
    "typescript": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/typescript/lib/typescript"
  },
  packages: [
    {
      "name": "aurelia-dialog",
      "location": "https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-dialog/dist/amd",
      "main": "aurelia-dialog",
    },
    {
      name: 'aurelia-templating-router',
      location: 'https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-templating-router/dist/amd',
      main : 'aurelia-templating-router'
    },
    {
      name: 'aurelia-templating-resources',
      location: 'https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-templating-resources/dist/amd',
      main : 'aurelia-templating-resources'
    },
    {
      name: 'aurelia-validation',
      location: 'https://mattduffield.github.io/aurelia-typescript-deploy/node_modules/aurelia-validation/dist/amd',
      main : 'aurelia-validation'
    },        
  ]
});

require.standardLoad = require.load;
require.load = function(context, moduleName, url) {
  // console.log('moduleName', moduleName);
  var config = requirejs.s.contexts._.config;
  if (moduleName in config.paths) {
    return require.standardLoad(context, moduleName, url);
  }
  require(['requirejs-typescript'], function(rts) {
    rts.load(
      moduleName,
      require,
      {
        fromText: function(text) {
          require.exec(text);
          context.completeLoad(moduleName);
        }
      },
      {});
  });
};
