const yaml = require("js-yaml"); // so dont have to use json for data files
const pluginTOC = require("eleventy-plugin-toc");

module.exports = function (config) {
    
    // config.addPassthroughCopy({ './src/_includes/styles.css': 'styles.css' });
    config.addDataExtension("yaml", contents => yaml.load(contents));
    config.addPlugin(pluginTOC);
    return {
      dir: {
        input: './src',
        output: './build'
      }
    }
  }