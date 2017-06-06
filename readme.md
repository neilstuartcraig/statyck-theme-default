# Statyck-theme-default

The default theme for [Statyck](https://github.com/neilstuartcraig/statyck).


## Installation

You can install this Statyck theme via (assuming you're currently in the directory/folder which you'd like to host your new blog):

```
npm install statyck-theme-default --production >> /dev/null 2>&1
```

(note: you may need to omit the `>> /dev/null 2>&1` on non-*nix OS's e.g. Windows)


## Theme development

### Naming
It'd be helpful if all themes NPM packages are named according to a convention so they can be easily found:

`statyck-theme-<theme-name>`

### Mandatory elements for Statyck themes
A theme has a few mandatory elements: 

#### Config
Themes _must_ copy (you can automate it as per the default theme or ask users to do it manually) a config file named `theme-config.json` into `<blog root>/statyck-config/`. This config file _must_ be a valid JSON file and _must_ contain at least a property in the root named `sourceDir` which is a path to the theme root directory (relative to the blog root directory).

#### Mandatory files 
Themes _must_ include the following files in the root (the path specified by `sourceDir` in the `theme-config.json` file):

* `page.html` - the handlebars template file used for each individual page
* `pages-index.html` - the handlebars template file used to create an index for your pages (often this will be an HTML `<ul>` or similar)
* `post.html` - the handlebars template file used for each individual blog post
* `posts-index.html` - the handlebars template file used to create a paginated index for your blog posts (usually these will be full HTML pages)

#### Assets
The default theme contains a directory called `assets` which has sub-directories containing asset files (css, js, images, media etc.). This is not mandatory but is generally recommended as a way to contain your page assets. Assets are referenced (in Markdown) relative to their host page e.g. `./assets/images/some-image.jpg`.

## License
[MIT license](./license.md)