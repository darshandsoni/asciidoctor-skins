var skins = ["asciidoctor", "clean", "dark", "fedora", "gazette", "italian-pop", "material-amber", "material-blue", "material-brown", "material-green", "material-grey", "material-orange", "material-pink", "material-purple", "material-red", "material-teal", "medium", "monospace", "notebook", "plain", "template", "tufte", "ubuntu"]

add_switcher();

function switch_css(css) {
  document.getElementsByTagName("link")[0].href = "https://darshandsoni.com/asciidoctor-skins/css/" + css + ".css";
}

function capitalize(s) {
  u = s.replace(/^(.)/, function(_, l){
    return l.toUpperCase();
  });
  return u;
}

function inline_switcher() {
  switcher = document.getElementById("switcher");
  select_open = '\n        <select name="switcher_dropdown" id="switcher_dropdown" accesskey="s" onchange="switch_css(this.value)">\n';
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

function add_switcher() {
  stylesheet = document.getElementsByTagName("link")[0];
  if (stylesheet == undefined) {
    head = document.getElementsByTagName('head')[0];
    link = document.createElement('link');
    link.rel="stylesheet";
    link.type="text/css";
    link.href="https://darshandsoni.com/asciidoctor-skins/css/" + skins[0] + ".css";
    head.appendChild(link);
  }

  var header = document.getElementById("header");
  var new_div = document.createElement("div");
  new_div.innerHTML = '<div id="switcher">&nbsp;</div>\n      <script type="text/javascript">inline_switcher();</script>';
  window.header.insertBefore(new_div, window.header.firstChild);

  inline_switcher();
}
