console.log( 'Running');
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    var parser = document.createElement('a');
    console.log( parser);
    parser.href = tab.url;
    if(parser.hostname == "www.google.com") {
        alert('google');
    }
});