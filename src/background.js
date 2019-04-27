const urlSrtiptAcula = chrome.runtime.getURL("chords-acula-main.js");
const scriptAcula = document.createElement("script");
scriptAcula.setAttribute("type", "text/javascript");
scriptAcula.src = urlSrtiptAcula;
document.getElementsByTagName("head")[0].appendChild(scriptAcula);
