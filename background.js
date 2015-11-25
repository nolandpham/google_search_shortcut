console.log( 'Running');
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    console.log( 'Listener');
    var parser = document.createElement('a');
    parser.href = tab.url;
    google_regex = /google/
    host = parser.hostname;
    if(host.search( google_regex) > 0) {
        // alert('checking');
        var g_row = jQuery('g');
        console.log( g_row.length);
    }
});