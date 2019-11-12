# asciidoctor-skins: CSS stylesheets for asciidoctor

Markdown is superbly simple. Perfect for writing quick notes and pages with a basic structure. Asciidoctor is superbly sophisticated. Where markdown fails, asciidoc/asciidoctor allows you to document things with ease, fine grain control and a civilised demeanor, worlds away from hair wrenching word processors.

Asciidoctor comes with a very clean default stylesheet that saves users from spending time formatting their documents. This repository is for users who would like some other style choices, without having to rewrite stylesheets from scratch. All stylesheets in here pull in asciidoctor's defaults first and then apply custom styles to a few elements.

## Usage

1. If you have no idea what asciidoctor is, check out their fabulous project [here](https://asciidoctor.org/).
2. Once you've got an .adoc document going, download the asciidoctor.css and a css skin file of your choice into your project directory.
3. In your adoc file, add the following line: `:stylesheet: Your_Chosen_Stylesheet.css`
4. Render your html file by running `asciidoctor sample.adoc`
5. Et voilà! Your beautiful web page based document is rendered.

## Demo

You can preview all of the stylesheets in the [online demo](https://darshandsoni.com/asciidoctor-skins).

To change the displayed stylesheet, just add the name of the CSS file after a `?` character at the end of the URL. For example, to preview the material stylsheet, just add `?material`.

## Custom preview

You can now add a JS switcher to any document to quickly preview the contents rendered with any of the available asciidoctor skins. Just add the following line to the `<body>` section of any asciidoctor-generated HTML page:

        <script src="https://darshandsoni.com/asciidoctor-skins/switcher.js" type="text/javascript"></script>

## Skins

Note: To preview all of them, visit the [screenshots](https://darshandsoni.com/asciidoctor-skins/screenshots/) page.

Available stylesheets:

* [default asciidoctor stylesheet](https://darshandsoni.com/asciidoctor-skins/?asciidoctor)
* [clean](https://darshandsoni.com/asciidoctor-skins/?clean)
* [dark](https://darshandsoni.com/asciidoctor-skins/?dark)
* [fedora](https://darshandsoni.com/asciidoctor-skins/?fedora)
* [gazette](https://darshandsoni.com/asciidoctor-skins/?gazette)
* [italian-pop](https://darshandsoni.com/asciidoctor-skins/?italian-pop)
* [medium](https://darshandsoni.com/asciidoctor-skins/?medium)
* [monospace](https://darshandsoni.com/asciidoctor-skins/?monospace)
* [notebook](https://darshandsoni.com/asciidoctor-skins/?notebook)
* [plain](https://darshandsoni.com/asciidoctor-skins/?plain)
* [template](https://darshandsoni.com/asciidoctor-skins/?template)
* [tufte](https://darshandsoni.com/asciidoctor-skins/?tufte)
* [ubuntu](https://darshandsoni.com/asciidoctor-skins/?ubuntu)

Note: the [template](https://darshandsoni.com/asciidoctor-skins/?template) skin is specifically designed as an aid for theming experiments, to make it easier to see the sections of the document affected by different CSS classes.

### Collections

Material skins, by @darshandsoni:

* [material amber](https://darshandsoni.com/asciidoctor-skins/?material-amber)
* [material blue](https://darshandsoni.com/asciidoctor-skins/?material-blue)
* [material brown](https://darshandsoni.com/asciidoctor-skins/?material-brown)
* [material green](https://darshandsoni.com/asciidoctor-skins/?material-green)
* [material grey](https://darshandsoni.com/asciidoctor-skins/?material-grey)
* [material orange](https://darshandsoni.com/asciidoctor-skins/?material-orange)
* [material pink](https://darshandsoni.com/asciidoctor-skins/?material-pink)
* [material purple](https://darshandsoni.com/asciidoctor-skins/?material-purple)
* [material red](https://darshandsoni.com/asciidoctor-skins/?material-red)
* [material teal](https://darshandsoni.com/asciidoctor-skins/?material-teal)

Bootswatch skins, based on [bootswatch](https://github.com/thomaspark/bootswatch/) by @thomaspark ([MIT](https://github.com/thomaspark/bootswatch/blob/gh-pages/LICENSE))

* [Cerulean](https://bootswatch.com/cerulean/)
* [Cosmo](https://bootswatch.com/cosmo/)
* [Cyborg](https://bootswatch.com/cyborg/)
* [Darkly](https://bootswatch.com/darkly/)
* [Flatly](https://bootswatch.com/flatly/)
* [Journal](https://bootswatch.com/journal/)
* [Lumen](https://bootswatch.com/lumen/)
* [Paper](https://bootswatch.com/paper/)
* [Readable](https://bootswatch.com/readable/)
* [Sandstone](https://bootswatch.com/sandstone/)
* [Slate](https://bootswatch.com/slate/)
* [Spacelab](https://bootswatch.com/spacelab/)
* [Superhero](https://bootswatch.com/superhero/)
* [Yeti](https://bootswatch.com/yeti/)

## Bookmarklet

You can quickly and easily test out how different themes look with a given document using the asciidoctor-skins bookmarklet. This will add a dropdown menu at the top of the page with all the different available themes. Just paste the following code into your address bar to create a CSS switcher for any Asciidoctor-generated document:

```javascript
javascript:(function()%7Bvar%20body%20%3D%20document.getElementsByTagName('body')%5B0%5D%3Bscript%20%3D%20document.createElement('script')%3Bscript.type%3D%20'text%2Fjavascript'%3Bscript.src%3D%20'https%3A%2F%2Fdarshandsoni.com%2Fasciidoctor-skins%2Fswitcher.js'%3Bbody.appendChild(script)%7D)()
```

Alternatively, just drag the link on the [demo page](https://darshandsoni.com/asciidoctor-skins/#_bookmarklet) to your browser's bookmark bar.

Boomarklet generated by the [Bookmarklet Creator](https://mrcoles.com/bookmarklet/). Thanks to [markdown-css](https://github.com/mrcoles/markdown-css) for the idea!

## Contribution

The purpose of this project is to allow asciidoc/asciidoctor users greater flexibility when it comes to customising the look and feel of their documentation. Apart from the available stylesheets, you are welcome to build your own. If you think the world could use it, submit a pull request and it will be featured too!
You can either edit template.css (which has most elements listed), or create your own stylesheets from scratch.

### Licence Agreement

By contributing changes to this repository, you agree to license your contributions under the [MIT license](https://github.com/darshandsoni/asciidoctor-skins/blob/gh-pages/LICENSE). This ensures your contributions have the same license as the project and that the community is free to use your contributions. You also assert that you are the original author of the work that you are contributing unless otherwise stated.

## Credits

* Demo based on [html5-test-page](https://github.com/cbracco/html5-test-page) by @cbracco
* JS switcher based on [dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css)

## License

MIT.
