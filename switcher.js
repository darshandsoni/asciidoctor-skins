var skins = ["asciidoctor", "clean", "dark", "fedora", "gazette", "italian-pop", "medium", "monospace", "notebook", "plain", "tufte", "ubuntu", "adoc-colony", "adoc-foundation", "adoc-foundation-lime", "adoc-foundation-potion", "adoc-github", "adoc-golo", "adoc-iconic", "adoc-maker", "adoc-readthedocs", "adoc-riak", "adoc-rocket-panda", "adoc-rubygems", "boot-cerulean", "boot-cosmo", "boot-cyborg", "boot-darkly", "boot-flatly", "boot-journal", "boot-lumen", "boot-paper", "boot-readable", "boot-slate", "boot-spacelab", "boot-superhero", "boot-yeti", "material-amber", "material-blue", "material-brown", "material-green", "material-grey", "material-orange", "material-pink", "material-purple", "material-red", "material-teal", "template"]

purgeCss();
addSwitcher();

function switchCss(css) {
  link = document.getElementsByTagName("link");
  last = link[link.length - 1];
  last.href = "https://darshandsoni.com/asciidoctor-skins/css/" + css + ".css";
}

function capitalize(s) {
  u = s.replace(/^(.)/, function(_, l){
    return l.toUpperCase();
  });
  return u;
}

function inlineSwitcher() {
  switcher = document.getElementById("switcher");
  select_open = '\n        <select name="switcher_dropdown" id="switcher_dropdown" accesskey="s" onchange="switchCss(this.value)">\n';
  dropdown = select_open;
  for (i = 0; i < skins.length; i++) {
    f = skins[i];
    skin_name = capitalize(f);
    option = '          <option value="' + f + '">' + skin_name + ' Skin</option>\n';
    dropdown = dropdown + option;
  }
  select_close = '        </select>\n      '
  dropdown = dropdown + select_close;
  switcher.innerHTML = dropdown;
}

function addSwitcher() {
  head = document.getElementsByTagName('head')[0];
  link = document.createElement('link');
  link.rel="stylesheet";
  link.type="text/css";
  link.href="https://darshandsoni.com/asciidoctor-skins/css/" + skins[0] + ".css";
  head.appendChild(link);

  var header = document.getElementById("header");
  var new_div = document.createElement("div");
  new_div.innerHTML = '<div id="switcher">&nbsp;</div>\n      <script type="text/javascript">inlineSwitcher();</script>';
  window.header.insertBefore(new_div, window.header.firstChild);

  inlineSwitcher();
}

function removeDefault() {
  var styles = document.getElementsByTagName("style");
  for (var i = 0; i < styles.length; i++) {
    if (/\* Asciidoctor default stylesheet/.test(styles[i].textContent)) {
      removeNode(styles[i]);
    }
  }
}

function removeClean() {
  var links = document.getElementsByTagName("link");
  for (var i = 0; i < links.length; i++) {
    if (/clean\.css/.test(links[i].href)) {
      removeNode(links[i]);
    }
  }
}

function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

function removeNode(n) {
  n.parentNode.removeChild(n);
}

function purgeCss() {
  removeDefault();
  removeClean();
}
