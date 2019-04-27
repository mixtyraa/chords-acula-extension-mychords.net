chrome.browserAction.onClicked.addListener((tab) => {
    if (tab.url.indexOf('/mychords.net') !== -1) {
        console.log(tab);

        chrome.storage.sync.get({
            select_acula_chords: true,
        }, (items) => {
            console.log(items);
            
            chrome.windows.getAll({populate:true},function(windows){
                windows.forEach((window) => {
                  window.tabs.forEach((tab) => {
                    if ((tab.url || '').indexOf('/mychords.net') !== -1) {
                        chrome.tabs.executeScript(tab.id,{code:`handlePopup(${!items.select_acula_chords});`});
                    }
                  });
                });
              });

            
            console.log('handlePopup');

            chrome.storage.sync.set({
                select_acula_chords: !items.select_acula_chords
            });
            
            if (!items.select_acula_chords) {
                chrome.browserAction.setIcon({path:"icon16.png"});
            } else {
                chrome.browserAction.setIcon({path:"icon16-disable.png"});
            }
        });
    }
});

updateIcon();

function updateIcon() {
    chrome.storage.sync.get({
        select_acula_chords: true,
      }, (items) => {
        if (items.select_acula_chords) {
            chrome.browserAction.setIcon({path:"icon16.png"});
        } else {
            chrome.browserAction.setIcon({path:"icon16-disable.png"});
        }
    });
    
}