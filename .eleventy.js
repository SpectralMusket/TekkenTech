const yaml = require("js-yaml"); // so dont have to use json for data files
const pluginTOC = require("eleventy-plugin-toc");

module.exports = function (config) {
    
    // config.addPassthroughCopy("./src/css");
    config.addPassthroughCopy("./src/img");
    config.addPassthroughCopy("./src/scripts");
    config.addPassthroughCopy("./src/videos");
    config.addDataExtension("yaml", contents => yaml.load(contents));
    config.addPlugin(pluginTOC, {
        wrapper: "nav",
        wrapperClass: "TOC TOCempty"
    });
    
    config.setBrowserSyncConfig({
      files: './docs/css/**/*.css'
    });
    
    config.addCollection("tagsList", function(collectionApi) {
      const tagsSet = new Set();
      collectionApi.getAll().map( item => {
          if (item.data.tags) { // handle pages that don't have tags
              item.data.tags.map( tag => tagsSet.add(tag))
          }
      });
      return [...tagsSet].sort(); // can do (a,b) => a.localeCompare(b) as well 
    });
    
    config.addCollection("charsList", function(collectionApi) {
        const charsSet = new Set();
        console.log("hellooo");
        collectionApi.getAll().map(item => item.data.tags).filter(tagsArray => tagsArray != undefined)
            .forEach(tagsArray => {
              if (tagsArray[1] != undefined) charsSet.add(tagsArray[1])
            });
        return [...charsSet].sort(); // can do (a,b) => a.localeCompare(b) as well 
    });
    
    return {
      dir: {
        input: './src',
        output: './docs'
      },
      pathPrefix: "/TekkenTech/"
    }
  }