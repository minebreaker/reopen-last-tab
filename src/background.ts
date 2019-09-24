chrome.browserAction.onClicked.addListener( () => {
    chrome.sessions.getRecentlyClosed( { maxResults: 1 }, ( [session] ) => {
        if ( !session || !session.tab ) return

        chrome.sessions.restore( session.tab.sessionId )
    } )
} )
