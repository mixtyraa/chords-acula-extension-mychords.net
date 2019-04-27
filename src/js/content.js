const urlSrtiptAcula = chrome.runtime.getURL("chords-acula-main.js");
const scriptAcula = document.createElement("script");
scriptAcula.setAttribute("type", "text/javascript");
scriptAcula.src = urlSrtiptAcula;
document.getElementsByTagName("head")[0].appendChild(scriptAcula);

const dswitcher = document.createElement('div');
dswitcher.style.display='none';
dswitcher.id = 'chords-acula-switcher';

document.body.appendChild(dswitcher);

function handlePopup(isSelectAculaChords) {
    dswitcher.setAttribute('data-chords-acula-switcher', isSelectAculaChords);
    dswitcher.click();
}

function init() {
        console.log('init settings');
        
        chrome.storage.sync.get({
            select_acula_chords: true,
          }, (items) => {
            console.log(items);
            dswitcher.setAttribute('data-chords-acula-switcher', items.select_acula_chords);
            dswitcher.click();
        });
}

init();