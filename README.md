# asciidoctor-skins: CSS stylesheets for asciidoctor

Markdown is superbly simple. Perfect for writing quick notes and pages with a basic structure. Asciidoctor is superbly sophisticated. Where markdown fails, asciidoc/asciidoctor allows you to document things with ease, fine grain control and a civilised demeanor, worlds away from hair wrenching word processors.

Asciidoctor comes with a very clean default stylesheet that saves users from spending time formatting their documents. This repository is for users who would like some other style choices, without having to rewrite stylesheets from scratch. All stylesheets in here pull in asciidoctor's defaults first and then apply custom styles to a few elements.

## Usage

1. If you have no idea what asciidoctor is, check out their fabulous project [here](http://asciidoctor.org/).
2. Once you've got an .adoc document going, download the asciidoctor.css and a css skin file of your choice into your project directory.
3. In your adoc file, add the following line:
`:stylesheet: Your_Chosen_Stylesheet.css`

4. Render your html file by running `asciidoctor sample.adoc`
5. Et voilà! Your beautiful web page based document is rendered.

## Demo

You can preview all of the stylesheets in the [online demo](https://darshandsoni.com/asciidoctor-skins).

To change the displayed stylesheet, just add the name of the CSS file after a `?` character at the end of the URL. For example, to preview the material stylsheet, just add `?material`.

## Custom preview

You can now add a JS switcher to any document to quickly preview the contents rendered with any of the available asciidoctor skins. Just add the following line to the `<body>` section of any asciidoctor-generated HTML page:

        <script src="switcher.js" type="text/javascript"></script>


## Skins

Note: To preview all of them, visit the [screenshots](https://darshandsoni.com/asciidoctor-skins/screenshots/) page.

Available stylesheets:

* [default asciidoctor stylesheet](http://darshandsoni.com/asciidoctor-skins/?asciidoctor)
* [clean](http://darshandsoni.com/asciidoctor-skins/?clean)
* [dark](http://darshandsoni.com/asciidoctor-skins/?dark)
* [fedora](http://darshandsoni.com/asciidoctor-skins/?fedora)
* [gazette](http://darshandsoni.com/asciidoctor-skins/?gazette)
* [italian-pop](http://darshandsoni.com/asciidoctor-skins/?italian-pop)
* [material amber](http://darshandsoni.com/asciidoctor-skins/?material-amber)
* [material blue](http://darshandsoni.com/asciidoctor-skins/?material-blue)
* [material brown](http://darshandsoni.com/asciidoctor-skins/?material-brown)
* [material green](http://darshandsoni.com/asciidoctor-skins/?material-green)
* [material grey](http://darshandsoni.com/asciidoctor-skins/?material-grey)
* [material orange](http://darshandsoni.com/asciidoctor-skins/?material-orange)
* [material pink](http://darshandsoni.com/asciidoctor-skins/?material-pink)
* [material purple](http://darshandsoni.com/asciidoctor-skins/?material-purple)
* [material red](http://darshandsoni.com/asciidoctor-skins/?material-red)
* [material teal](http://darshandsoni.com/asciidoctor-skins/?material-teal)
* [medium](http://darshandsoni.com/asciidoctor-skins/?medium)
* [monospace](http://darshandsoni.com/asciidoctor-skins/?monospace)
* [notebook](http://darshandsoni.com/asciidoctor-skins/?notebook)
* [plain](http://darshandsoni.com/asciidoctor-skins/?plain)
* [template](http://darshandsoni.com/asciidoctor-skins/?template)
* [tufte](http://darshandsoni.com/asciidoctor-skins/?tufte)
* [ubuntu](http://darshandsoni.com/asciidoctor-skins/?ubuntu)

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
